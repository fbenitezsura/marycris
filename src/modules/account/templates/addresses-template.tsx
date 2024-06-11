"use client"

import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Dirección de Envío</h1>
        <p className="text-base-regular">
         Vea y actualice sus direcciones de envío, puede agregar tantas como desee. Al guardar sus direcciones, estarán disponibles durante el proceso de pago.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
