import { Cart } from "@medusajs/medusa"
import { Button, Heading } from "@medusajs/ui"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import Link from "next/link"

type SummaryProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">,
  customer: any
}

const Summary = ({ cart, customer }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
        Resumen
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals data={cart} />
      {customer ? (
        <Link href="/checkout">
          <Button className="w-full h-10 bg-[#FF5733] hover:bg-[#FF5733] text-white">Ir a pagar</Button>
        </Link>
      ) : (
        <div className="flex justify-center">
          <span>Debes iniciar para continuar</span>
        </div>
      )}

    </div>
  )
}

export default Summary
