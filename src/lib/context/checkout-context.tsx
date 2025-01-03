"use client"

import { medusaClient } from "@lib/config"
import useToggleState, { StateType } from "@lib/hooks/use-toggle-state"
import {
  Address,
  Cart,
  Customer,
  StorePostCartsCartReq,
} from "@medusajs/medusa"
import Wrapper from "@modules/checkout/components/payment-wrapper"
import { isEqual } from "lodash"
import {
  formatAmount,
  useCart,
  useCartShippingOptions,
  useMeCustomer,
  useRegions,
  useSetPaymentSession,
  useUpdateCart,
  useUpdatePaymentSession
} from "medusa-react"
import { useRouter } from "next/navigation"
import React, { createContext, useContext, useEffect, useMemo } from "react"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { useStore } from "./store-context"
import Spinner from "@modules/common/icons/spinner"

type AddressValues = {
  first_name: string
  last_name: string
  company: string
  address_1: string
  address_2: string
  city: string
  province: string
  postal_code: string
  country_code: string
  phone: string
}

export type CheckoutFormValues = {
  shipping_address: AddressValues
  billing_address: AddressValues
  email: string
}

interface CheckoutContext {
  cart?: Omit<Cart, "refundable_amount" | "refunded_total">
  shippingMethods: { label?: string; value?: string; price: string }[]
  isLoading: boolean
  addressReady: boolean
  shippingReady: boolean
  paymentReady: boolean
  readyToComplete: boolean
  sameAsBilling: StateType
  editAddresses: StateType
  editShipping: StateType
  editPayment: StateType
  isCompleting: StateType
  initPayment: () => Promise<void>
  setAddresses: (addresses: CheckoutFormValues) => void
  setSavedAddress: (address: Address) => void
  setShippingOption: (soId: string) => void
  setPaymentSession: (providerId: string) => void
  onPaymentCompleted: () => void
}

const CheckoutContext = createContext<CheckoutContext | null>(null)

interface CheckoutProviderProps {
  children?: React.ReactNode
}

const IDEMPOTENCY_KEY = "create_payment_session_key"

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const {
    cart,
    setCart,
    addShippingMethod: {
      mutate: setShippingMethod,
      isLoading: addingShippingMethod,
    },
    completeCheckout: { mutate: complete }
  } = useCart()

  const { customer } = useMeCustomer()
  const { countryCode } = useStore()
  const updatePaymentSession = useUpdatePaymentSession(cart?.id);
  const methods = useForm<CheckoutFormValues>({
    defaultValues: mapFormValues(customer, cart, countryCode),
    reValidateMode: "onChange",
  })
  const {
    mutate: setPaymentSessionMutation,
    isLoading: settingPaymentSession,
  } = useSetPaymentSession(cart?.id!)

  const { mutate: updateCart, isLoading: updatingCart } = useUpdateCart(
    cart?.id!
  )

  const { shipping_options } = useCartShippingOptions(cart?.id!, {
    enabled: !!cart?.id,
  })

  const { regions } = useRegions();

  const { resetCart, setRegion } = useStore()
  const { push } = useRouter()

  const editAddresses = useToggleState()
  const sameAsBilling = useToggleState(
    cart?.billing_address && cart?.shipping_address
      ? isEqual(cart.billing_address, cart.shipping_address)
      : true
  )

  const editShipping = useToggleState()
  const editPayment = useToggleState()
  /**
   * Boolean that indicates if a part of the checkout is loading.
   */
  const isLoading = useMemo(() => {
    return addingShippingMethod || settingPaymentSession || updatingCart
  }, [addingShippingMethod, settingPaymentSession, updatingCart])

  /**
   * Boolean that indicates if the checkout is ready to be completed. A checkout is ready to be completed if
   * the user has supplied a email, shipping address, billing address, shipping method, and a method of payment.
   */
  const { addressReady, shippingReady, paymentReady, readyToComplete } =
    useMemo(() => {
      const addressReady =
        !!cart?.shipping_address && !!cart?.billing_address && !!cart?.email

      const shippingReady =
        addressReady &&
        !!(
          cart?.shipping_methods &&
          cart.shipping_methods.length > 0 &&
          cart.shipping_methods[0].shipping_option
        )

      const paymentReady = shippingReady && !!cart?.payment_session

      const readyToComplete = addressReady && shippingReady && paymentReady

      return {
        addressReady,
        shippingReady,
        paymentReady,
        readyToComplete,
      }
    }, [cart])

  useEffect(() => {
    if (addressReady && !shippingReady) {
      editShipping.open()
    }
  }, [addressReady, shippingReady, editShipping])

  const shippingMethods = useMemo(() => {
    if (shipping_options && cart?.region) {
      return shipping_options?.map((option) => ({
        value: option.id,
        label: option.name,
        price: formatAmount({
          amount: option.amount || 0,
          region: cart.region,
        }),
      }))
    }

    return []
  }, [shipping_options, cart])

  /**
   * Resets the form when the cart changed.
   */
  useEffect(() => {
    if (cart?.id) {
      methods.reset(mapFormValues(customer, cart, countryCode))
    }
  }, [customer, cart, methods, countryCode])

  useEffect(() => {
    if (!cart) {
      editAddresses.open()
      return
    }

    if (cart?.shipping_address && cart?.billing_address) {
      editAddresses.close()
      return
    }

    editAddresses.open()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  /**
   * Method to set the selected shipping method for the cart. This is called when the user selects a shipping method, such as UPS, FedEx, etc.
   */
  const setShippingOption = async (soId: string) => {
    if (cart) {
      setShippingMethod(
        { option_id: soId },
        {
          onSuccess: ({ cart }) => setCart(cart),
        }
      )
    }
  }

  /**
   * Method to create the payment sessions available for the cart. Uses a idempotency key to prevent duplicate requests.
   */
  const initPayment = async () => {
    if (cart?.id && !cart.payment_sessions?.length && cart?.items?.length) {
      return medusaClient.carts
        .createPaymentSessions(cart.id, {
          "Idempotency-Key": IDEMPOTENCY_KEY,
        })
        .then(({ cart }) => cart && setCart(cart))
        .catch((err) => err)
    }
  }

  useEffect(() => {
    // initialize payment session
    const start = async () => {
      await initPayment()
    }
    start()
  }, [cart?.region, cart?.id, cart?.items])

  /**
   * Method to set the selected payment session for the cart. This is called when the user selects a payment provider, such as Stripe, PayPal, etc.
   */
  const setPaymentSession = (providerId: string) => {
    if (cart) {
      setPaymentSessionMutation(
        {
          provider_id: providerId,
        },
        {
          onSuccess: ({ cart }) => {
            setCart(cart)
          },
        }
      )
    }
  }

  const setSavedAddress = (address: Address) => {
    const setValue = methods.setValue

    setValue("shipping_address", {
      address_1: address?.address_1 || "",
      address_2: address?.address_2 || "",
      city: address?.city || "",
      country_code: address?.country_code || "",
      first_name: address?.first_name || "",
      last_name: address?.last_name || "",
      phone: address?.phone || "",
      postal_code: address?.postal_code || "",
      province: address?.province || "",
      company: address?.company || "",
    })
  }

  /**
   * Method that validates if the cart's region matches the shipping address's region. If not, it will update the cart region.
   */
  const validateRegion = (countryCode: string) => {
    if (regions && cart) {
      const region = regions.find((r) =>
        r.countries.map((c) => c.iso_2).includes(countryCode)
      )

      if (region && region.id !== cart.region.id) {
        setRegion(region.id, countryCode)
      }
    }
  }

  /**
   * Method that sets the addresses and email on the cart.
   */
  const setAddresses = (data: CheckoutFormValues) => {
    const { shipping_address, billing_address, email } = data

    validateRegion(shipping_address.country_code)

    const payload: StorePostCartsCartReq = {
      shipping_address,
      email,
    }

    if (isEqual(shipping_address, billing_address)) {
      sameAsBilling.open()
    }

    if (sameAsBilling.state) {
      payload.billing_address = shipping_address
    } else {
      payload.billing_address = billing_address
    }

    updateCart(payload, {
      onSuccess: ({ cart }) => setCart(cart),
    })
  }

  const isCompleting = useToggleState()

  /**
   * Method to complete the checkout process. This is called when the user clicks the "Complete Checkout" button.
   */
  const onPaymentCompleted = () => {
    isCompleting.open()
    complete(undefined, {
      onSuccess: ({ data }) => {

        if (cart?.payment_session?.provider_id === 'flow-payment') {

          updatePaymentSession.mutate({
            provider_id: 'flow-payment',
            data: {
              subject: 'Pago Mary cris',
              order_id: data.id,
              email: data.email,
              amount: data.total
            }
          }, {
            onSuccess: ({ cart }) => {
              const urlToPay : string = cart?.payment_session?.data?.urlToPay || '';
              resetCart();
              push(urlToPay);
            }
          })

        } else {
          push(`/order/confirmed/${data.id}`);
          resetCart()
        }

      },
    })
    isCompleting.close()
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContext.Provider
        value={{
          cart,
          shippingMethods,
          isLoading,
          addressReady,
          shippingReady,
          paymentReady,
          readyToComplete,
          sameAsBilling,
          editAddresses,
          editShipping,
          editPayment,
          isCompleting,
          initPayment,
          setAddresses,
          setSavedAddress,
          setShippingOption,
          setPaymentSession,
          onPaymentCompleted,
        }}
      >
        {isLoading && cart?.id === "" ? (
          <div className="flex justify-center items-center h-screen">
            <div className="w-auto">
              <Spinner size={40} />
            </div>
          </div>
        ) : (
          <Wrapper paymentSession={cart?.payment_session}>{children}</Wrapper>
        )}
      </CheckoutContext.Provider>
    </FormProvider>
  )
}

export const useCheckout = () => {
  const context = useContext(CheckoutContext)
  const form = useFormContext<CheckoutFormValues>()
  if (context === null) {
    throw new Error(
      "useProductActionContext must be used within a ProductActionProvider"
    )
  }
  return { ...context, ...form }
}

/**
 * Method to map the fields of a potential customer and the cart to the checkout form values. Information is assigned with the following priority:
 * 1. Cart information
 * 2. Customer information
 * 3. Default values - null
 */
const mapFormValues = (
  customer?: Omit<Customer, "password_hash">,
  cart?: Omit<Cart, "refundable_amount" | "refunded_total">,
  currentCountry?: string
): CheckoutFormValues => {
  const customerShippingAddress = customer?.shipping_addresses?.[0]
  const customerBillingAddress = customer?.billing_address

  return {
    shipping_address: {
      first_name:
        cart?.shipping_address?.first_name ||
        customerShippingAddress?.first_name ||
        "",
      last_name:
        cart?.shipping_address?.last_name ||
        customerShippingAddress?.last_name ||
        "",
      address_1:
        cart?.shipping_address?.address_1 ||
        customerShippingAddress?.address_1 ||
        "",
      address_2:
        cart?.shipping_address?.address_2 ||
        customerShippingAddress?.address_2 ||
        "",
      city: cart?.shipping_address?.city || customerShippingAddress?.city || "",
      country_code:
        currentCountry ||
        cart?.shipping_address?.country_code ||
        customerShippingAddress?.country_code ||
        "",
      province:
        cart?.shipping_address?.province ||
        customerShippingAddress?.province ||
        "",
      company:
        cart?.shipping_address?.company ||
        customerShippingAddress?.company ||
        "",
      postal_code:
        cart?.shipping_address?.postal_code ||
        customerShippingAddress?.postal_code ||
        "",
      phone:
        cart?.shipping_address?.phone || customerShippingAddress?.phone || "",
    },
    billing_address: {
      first_name:
        cart?.billing_address?.first_name ||
        customerBillingAddress?.first_name ||
        "",
      last_name:
        cart?.billing_address?.last_name ||
        customerBillingAddress?.last_name ||
        "",
      address_1:
        cart?.billing_address?.address_1 ||
        customerBillingAddress?.address_1 ||
        "",
      address_2:
        cart?.billing_address?.address_2 ||
        customerBillingAddress?.address_2 ||
        "",
      city: cart?.billing_address?.city || customerBillingAddress?.city || "",
      country_code:
        cart?.shipping_address?.country_code ||
        customerBillingAddress?.country_code ||
        "",
      province:
        cart?.shipping_address?.province ||
        customerBillingAddress?.province ||
        "",
      company:
        cart?.billing_address?.company || customerBillingAddress?.company || "",
      postal_code:
        cart?.billing_address?.postal_code ||
        customerBillingAddress?.postal_code ||
        "",
      phone:
        cart?.billing_address?.phone || customerBillingAddress?.phone || "",
    },
    email: cart?.email || customer?.email || "",
  }
}
