import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import Checkbox from "@modules/common/components/checkbox"
import { Container } from "@medusajs/ui"
import NativeSelect, {
  NativeSelectProps,
} from "@modules/common/components/native-select"
import InputPhone from "@modules/common/components/input-phone"
const ShippingAddress = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  const { customer } = useMeCustomer()

  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <Container className="mb-6 flex flex-col gap-y-4 p-5">
          <p className="text-small-regular">
            {`Hola ${customer.first_name}, ¿Quieres utilizar una de tus direcciones guardadas?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </Container>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Nombres"
                {...register("shipping_address.first_name", {
                  required: "El nombre es requerido",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Apellidos"
                {...register("shipping_address.last_name", {
                  required: "El apellido es requerido",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Dirección"
                {...register("shipping_address.address_1", {
                  required: "Dirección es requerido",
                })}
                autoComplete="address-line1"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="Compañia"
                {...register("shipping_address.company")}
                autoComplete="organization"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Código postal"
                {...register("shipping_address.postal_code", {
                  required: "Código postal es requerido",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                required
              />
              <CountrySelect
                {...register("shipping_address.country_code", {
                  required: "Pais es requerido",
                })}
                autoComplete="country"
                errors={errors}
                touched={touchedFields}
                required
              />
              <NativeSelect
              placeholder="Región"
              {...register("shipping_address.province", {
                required: "Región es requerida",
              })}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
              required
              >
                {[{
                  value: 'VIII',
                  label: 'Octava Región'
                }].map(({ value, label }, index) => (
                  <option key={index} value={value}>
                    {label}
                  </option>
                ))}
              </NativeSelect>
              <NativeSelect
              placeholder="Ciudad"
              {...register("shipping_address.city", {
                required: "Ciudad es requerida",
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
              required
              >
                {[{
                  value: 'Coronel',
                  label: 'Coronel'
                }].map(({ value, label }, index) => (
                  <option key={index} value={value}>
                    {label}
                  </option>
                ))}
              </NativeSelect>
            </div>
            <div className="my-8">
              <Checkbox
                label="Usar la misma dirección para la facturación."
                checked={checked}
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="Correo"
                {...register("email", {
                  required: "Correo es requerido",
                  pattern: emailRegex,
                })}
                autoComplete="email"
                errors={errors}
                touched={touchedFields}
                required
              />
              <InputPhone
                label="Telefono"
                {...register("shipping_address.phone")}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
              />
            </div>
          </>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
