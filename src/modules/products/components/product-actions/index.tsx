import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select";
import ShowNumberFormat from '@modules/common/components/number-format';
import clsx from "clsx"
import React, { useMemo } from "react"

type ProductActionsProps = {
  product: PricedProduct
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id });

  console.log('product',product);

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">

      {selectedPrice ? (
        <div className="flex flex-col text-ui-fg-base mb-[30px] pb-[25px] border-b-[1px] border-[#e6ecf0]">
          <span className="text-[24px] text-[#2D2A6E]">{product.subtitle}</span>
          <span
            className={clsx("mb-[8px] text-xl-semi text-[#ea0d42] text-[24px] font-medium leading-[35px]", {
              "text-ui-fg-interactive": selectedPrice.price_type === "sale",
            })}
          >
            <ShowNumberFormat value={selectedPrice.calculated_price} />
          </span>
          <ul className="relative list-none">
            <li className="relative">
              <span className="absolute top-1/2 left-0 h-1.5 w-1.5 transform -translate-y-1/2 bg-gray-700 rounded-full"></span>
              <span className="text-[14px] leading-[22px] text-[#4d5574] pl-[18px]">Saludables & Nutritivos</span>
            </li>
            <li className="relative">
              <span className="absolute top-1/2 left-0 h-1.5 w-1.5 transform -translate-y-1/2 bg-gray-700 rounded-full"></span>
              <span className="text-[14px] leading-[22px] text-[#4d5574] pl-[18px]">Beneficios para el corazón y cerebro</span>
            </li>
            <li className="relative">
              <span className="absolute top-1/2 left-0 h-1.5 w-1.5 transform -translate-y-1/2 bg-gray-700 rounded-full"></span>
              <span className="text-[14px] leading-[22px] text-[#4d5574] pl-[18px]">Yemas más ricas, claras más firmes</span>
            </li>
          </ul>
          {selectedPrice.price_type === "sale" && (
            <>
              <p>
                <span className="text-ui-fg-subtle">Original: </span>
                <span className="line-through">
                  {selectedPrice.original_price}
                </span>
              </p>
              <span className="text-ui-fg-interactive">
                -{selectedPrice.percentage_diff}%
              </span>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <div>
        {product.variants.length > 1 && (
          <div className="flex flex-col gap-y-4">
            {(product.options || []).map((option) => {
              return (
                <div key={option.id}>
                  <OptionSelect
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
            })}
            <Divider />
          </div>
        )}
      </div>
      <div className="flex mb-[15px]">
        <div className="flex items-center">
          <span className="mr-1">Cantidad: </span>
          <div className="flex h-[45px] items-center justify-between bg-[#f3f3f9] border-[#ebeff4] border-[1px] py-[10px] px-[29px] rounded-[30px] text-[#4d5574]">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-[12px] h-[16px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
              </svg>
            </span>
            <span className="bg-[#f3f3f9] text-[#4d5574] text-center w-[25px] text-[16px] font-semibold">1</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-[12px] h-[16px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </div>
        </div>
        <button
          onClick={addToCart}
          disabled={!inStock || !variant}
          className={`w-full ml-2 h-[45px] ${!inStock ? 'bg-white border-[#FF813A] border-1 text-[#444]' : 'bg-[#96ae00] hover:bg-[#859A00] text-white'}  rounded-[30px] `}
        >
          {!inStock
            ? "Sin stock"
            : !variant
              ? "Seleccione una opcion"
              : "Agregar al carrito"}
        </button>
      </div>
      <ul className="flex border-b-[1px] border-[#e6ecf0] mb-[30px] pb-[20px]">
        <li className="flex items-center cursor-pointer text-[13px] text-[#2d2a6e]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[12px] h-[12px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <span className="ml-1"> Agregar a favoritos</span>
        </li>
      </ul>
      <div className="flex flex-col mb-[30px] pb-[20px]">
        <ul className="mb-[25px]">
          <li className="flex items-center cursor-pointer text-[13px] text-[#2d2a6e]">
            Stock Diponible:
            <span className="ml-1 text-[#00B853]">20 en Stock</span>
          </li>
        </ul>
        <div className="bg-[#f7f7f9] p-[20px] rounded-[5px] text-center">
          <img className="mx-auto" src="https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fpayment-2.png&w=640&q=75"></img>
          <span className="block mt-[5px] text-[16px] text-[#4D5574]">Pago seguro y protegido</span>
        </div>
      </div>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} />
  </ProductProvider>
)

export default ProductActions
