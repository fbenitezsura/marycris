import { Customer, Order } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import ChevronDown from "@modules/common/icons/chevron-down"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import User from "@modules/common/icons/user"
import { useAccount } from "@lib/context/account-context"
import Link from "next/link"
import { format } from 'date-fns';
import ShowNumberFormat from "@modules/common/components/number-format"
type OverviewProps = {
  orders?: Order[]
  customer?: Omit<Customer, "password_hash">
}

const Overview = ({ orders, customer }: OverviewProps) => {
  const { handleLogout } = useAccount()
  return (
    <div>
      <div className="small:hidden">
        <div className="text-xl-semi mb-4 px-8">
          Hola {customer?.first_name}
        </div>
        <div className="text-base-regular">
          <ul>
            <li>
              <Link
                href="/account/profile"
                className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <User size={16} />
                    <span>Perfil</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li>
              <Link
                href="/account/addresses"
                className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <MapPin size={16} />
                    <span>Direcciones</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li>
              <Link
                href="/account/orders"
                className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <Package size={16} />
                    <span>Ordenes</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li className="flex items-center justify-between py-4 border-b border-gray-200 px-8">
              <button type="button" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden small:block">
        <div className="text-xl-semi flex justify-between items-start mb-4">
          <span>Hola {customer?.first_name}</span>
          <span className="text-small-regular text-gray-700">
            Registrado como:{" "}
            <span className="font-semibold">{customer?.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Perfil</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    Completado
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Direcciones</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    {customer?.shipping_addresses?.length > 1 ? 'Guardadas' : 'Guardada'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-large-semi">Ordenes recientes</h3>
              </div>
              <ul className="flex flex-col gap-y-4">
                {orders ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li key={order.id}>
                        <Link href={`/order/details/${order.id}`}>
                          <Container className="bg-gray-50 flex justify-between items-center p-4">
                            <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
                              <span className="font-semibold">Fecha de Orden</span>
                              <span className="font-semibold">
                                Numero de orden
                              </span>
                              <span className="font-semibold">
                                Monto Total
                              </span>
                              <span>
                                {format(new Date(order.created_at), 'dd-MM-yyyy')}
                              </span>
                              <span>#{order.display_id}</span>
                              <span>
                                <ShowNumberFormat value={order.total} />
                              </span>
                            </div>
                            <button
                              className="flex items-center justify-between"
                              onClick={close}
                            >
                              <span className="sr-only">
                                Ver Orden #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </Container>
                        </Link>
                      </li>
                    )
                  })
                ) : (
                  <span>No hay ordenes recientes.</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer?: Omit<Customer, "password_hash">) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
