import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import InputPhone from "@modules/common/components/input-phone"
import { Spinner } from "@medusajs/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6 text-center">
        Conviértete en cliente de la tienda {process.env.NEXT_PUBLIC_NAME_ECOMMERCE}
      </h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Cree su perfil de miembro de la tienda {process.env.NEXT_PUBLIC_NAME_ECOMMERCE} y obtenga acceso a una experiencia de compra mejorada.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Nombres"
            {...register("first_name", { required: "First name is required" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Apellidos"
            {...register("last_name", { required: "Last name is required" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Correo electronico"
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
            errors={errors}
          />
          <InputPhone 
          label="Telefono"
          {...register("phone")}
          autoComplete="tel"
          errors={errors}
          />
          <Input
            label="Contraseña"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              Estas credenciales no coinciden con nuestros registros.
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Al crear una cuenta, usted acepta las condiciones de Medusa Store.{" "}
          <Link href="/terms-and-conditions" className="underline">
            Términos y condiciones
          </Link>
          .
        </span>
        <Button className="mt-6 w-full" size="xlarge">
          Registrarme
        </Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Tienes una cuenta ?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Ingresar
        </button>
        .
      </span>
    </div>
  )
}

export default Register
