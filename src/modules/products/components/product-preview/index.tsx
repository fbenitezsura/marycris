import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import ShowNumberFormat from "@modules/common/components/number-format";
import StarRating from "@modules/products/components/start-rating/index";
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

  return (
    <Link href={`/products/${handle}`} className="group">
      <div className="relative border-[1px] border-[#ebeff4] rounded-[10px] bg-white">
        {!inStock && (
          <div className="absolute top-2 left-1 w-[86px] h-[20px] rounded-[6px] bg-[#5F5F5F] z-30 flex items-center justify-center px-[5px] py-[4px]">
            <span className="text-white text-[12px]">{inStock ? 'Stock' : 'Sin Stock'}</span>
          </div>
        )}
        <Thumbnail className="p-[20px]" thumbnail={thumbnail} size="square" isFeatured={true} />
        <div className="h-auto min-h-[115px] p-[16px] rounded-b-lg">
          {/*<Text className="text-[13px] text-[#79819c] text-left">{handle}</Text>*/}
          <Text className="text-[16px] h-[48px] text-[#2d2a6e] font-normal text-left">{title}</Text>
          <StarRating rating={5} />
          <div className="mt-[10px] text-left">
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
                  <ShowNumberFormat className="text-[16px] text-[#ea0d42] font-semibold" value={price.calculated_price} />
                </Text>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </div>
        </div>
        <div className="pt-[11px] pr-[21px] pl-[20px] pb-[19px]">
          <button className="pt-[1px] h-[37px] mb-[10px] w-full px-[10px] md:px-[20px] bg-[#96ae00] leading-[35px] uppercase font-semibold rounded-[50px] text-[13px] text-white">
            <p>Agregar al carrito</p>
          </button>
          <div className="flex flex-col text-left text-[13px] pl-[10px] text-[#79819c]">
            <p>Proteina: 6g por unidad.</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview
