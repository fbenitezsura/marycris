import { Order } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import Thumbnail from "@modules/products/components/thumbnail"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { useMemo } from "react"
import { format } from 'date-fns';
import ShowNumberFormat from "@modules/common/components/number-format"
type OrderCardProps = {
  order: Omit<Order, "beforeInsert">
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  return (
    <div className="bg-white flex flex-col">
      <div className="uppercase text-large-semi mb-1">#{order.display_id}</div>
      <div className="flex items-center divide-x divide-gray-200 text-small-regular text-gray-700">
        <span className="pr-2">
          {format(new Date(order.created_at),'dd-MM-yyyy')}
        </span>
        <span className="px-2">
          <ShowNumberFormat value={order.total} />
        </span>
        <span className="pl-2">{`${numberOfLines} ${
          numberOfLines > 1 ? "Productos" : "Producto"
        }`}</span>
      </div>
      <div className="grid grid-cols-2 small:grid-cols-4 gap-4 my-4">
        {order.items.slice(0, 3).map((i) => {
          return (
            <div key={i.id} className="flex flex-col gap-y-2">
              <Thumbnail thumbnail={i.thumbnail} images={[]} size="full" />
              <div className="flex items-center text-small-regular text-gray-700">
                <span className="text-gray-900 font-semibold">{i.title}</span>
                <span className="ml-2">x</span>
                <span>{i.quantity}</span>
              </div>
            </div>
          )
        })}
        {numberOfProducts > 4 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-small-regular text-gray-700">
              + {numberOfLines - 4}
            </span>
            <span className="text-small-regular text-gray-700">más</span>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Link href={`/order/details/${order.id}`}>
          <Button variant="secondary">Ver detalles</Button>
        </Link>
      </div>
    </div>
  )
}

export default OrderCard
