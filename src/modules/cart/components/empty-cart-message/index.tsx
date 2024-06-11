import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-20 md:py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Carrito
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        No tienes nada en tu carrito. Cambiemos eso, use el enlace a continuación para comenzar a explorar nuestros productos.
      </Text>
      <UnderlineLink href="/store">
        <div className="border border-[#FF5733] p-5 w-[220px] flex justify-center">
          Ir a la tienda
        </div>
      </UnderlineLink>
    </div>
  )
}

export default EmptyCartMessage
