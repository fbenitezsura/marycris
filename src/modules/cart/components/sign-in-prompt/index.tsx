import { Button, Heading, Text } from "@medusajs/ui"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          ¿Ya tienes una cuenta?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Inicia sesión para una mejor experiencia
        </Text>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary" className="bg-[#FF5733] text-white w-full hover:bg-[#FF5733] h-10">
            Iniciar sesión
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
