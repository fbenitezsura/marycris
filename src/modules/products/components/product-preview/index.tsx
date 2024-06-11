import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import ShowNumberFormat from "@modules/common/components/number-format"
const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
  inStock
}: ProductPreviewType & {
  inStock: boolean
}) => {
  console.log('inStock',inStock)
  return (
    <Link href={`/products/${handle}`} className="group">
    <div className="relative">
      {!inStock && (
        <div className="absolute top-2 left-1 w-[86px] h-[20px] rounded-[6px] bg-[#5F5F5F] z-30 flex items-center justify-center px-[5px] py-[4px]">
          <span className="text-white text-[12px]">{inStock ? 'Stock' : 'Sin Stock'}</span>
        </div>
      )}
      
      <Thumbnail thumbnail={thumbnail} size="square" isFeatured={isFeatured} />
      <button className="w-full h-[38px] px-[6] py-[10px] border-1 flex justify-center items-center
      hover:border-2 hover:border-[#ccc] border-[#FF813A] hover:bg-[#313131] text-[#313131] hover:text-white">Comprar</button>
      <div className="h-auto min-h-[115px] bg-[#F7F7F7] p-[16px] text-center rounded-b-lg">
        <Text className="text-[16px] text-black font-bold">{title}</Text>
        <div className="mt-[10px]">
          {price ? (
            <>
              {price.price_type === "sale" && (
                <Text className="line-through text-ui-fg-muted text-[40px]">
                  {price.original_price}
                </Text>
              )}
              <Text
                className={clsx("text-ui-fg-muted", {
                  "text-ui-fg-interactive": price.price_type === "sale",
                })}
              >
                <ShowNumberFormat className="text-[16px] text-[#FF5733] font-semibold" value={price.calculated_price}/>
              </Text>
            </>
          ) : (
            <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
          )}
        </div>
      </div>
    </div>
  </Link>
  )
}

export default ProductPreview
