"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import { Text } from "@medusajs/ui"
import Link from "next/link";

const FooterNav = () => {
  const { collections } = useCollections()
  const { product_categories } = useProductCategories()

  return (
    <div className="border-t border-ui-border-base mt-20">
      <div className="flex flex-col bg-[#282828] md:px-[100px] px-[16px]">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div>
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle text-white hover:underline uppercase"
            >
              {process.env.NEXT_PUBLIC_NAME_ECOMMERCE}
            </Link>
          </div>
          <div className="text-small-regular grid grid-cols-3 gap-x-10 md:gap-x-16">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-white txt-ui-fg-base">Empresas</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <span className="text-white">Quiene somos</span>
                </li>
                <Link
                  href="/terms-and-conditions"
                  className=""
                >
                  <li>
                    <span className="text-white">Términos y condiciones</span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-white txt-ui-fg-base">Contacto</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <span className="text-white">Concepción, Octava Región</span>
                </li>
                <li>
                  <p className="font-bold mt-2 text-white">WHATSAPP</p>
                  <span className="text-white">(+56 9) 44218010</span>
                </li>
              </ul>
            </div>
            {collections && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white txt-ui-fg-base">
                  Productos
                </span>
                <ul
                  className={clsx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-ui-fg-base text-white"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full mb-8 text-center text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()}. Todo los derechos reservados.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
