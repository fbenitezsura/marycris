"use client"

import { Heading } from "@medusajs/ui"
import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 px-4 small:py-0 small:pr-8 ">
      <div className="w-full bg-white flex flex-col">
        <Divider className="my-6 small:hidden" />
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular items-baseline"
        >
          En tu Carrito
        </Heading>
        {cart?.payment_session?.provider_id === "manual" && (
          <p className="mt-1">Con transferencia usar el código: <strong>EFECTIVO10</strong></p>
        )}
        
        <Divider className="my-6" />
        <CartTotals data={cart} />
        <ItemsPreviewTemplate region={cart?.region} items={cart?.items} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
