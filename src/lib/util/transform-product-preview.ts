import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { formatAmount } from "medusa-react"
import { ProductPreviewType } from "types/global"
import { CalculatedVariant } from "types/medusa"
import { canBuy } from "@lib/util/can-buy";
const transformProductPreview = (
  product: PricedProduct,
  region: Region
): ProductPreviewType & {
  inStock: boolean
} => {
  const variants = product.variants as unknown as CalculatedVariant[];

  let cheapestVariant = undefined

  if (variants?.length > 0) {
    cheapestVariant = variants.reduce((acc, curr) => {
      if (acc.calculated_price > curr.calculated_price) {
        return curr
      }
      return acc
    }, variants[0])
  }

  const inStock = (product: PricedProduct) => {
    const variants = product.variants;
    return variants.some((variant) => variant.inventory_quantity > 0);
  }

  return {
    id: product.id!,
    title: product.title!,
    handle: product.handle!,
    thumbnail: product.thumbnail!,
    created_at: product.created_at,
    inStock: inStock(product),
    price: cheapestVariant
      ? {
          calculated_price: cheapestVariant.original_price_incl_tax,
          original_price: cheapestVariant.original_price_incl_tax,
          difference: getPercentageDiff(
            cheapestVariant.original_price,
            cheapestVariant.calculated_price
          ),
          price_type: cheapestVariant.calculated_price_type,
        }
      : undefined,
  }
}

export default transformProductPreview
