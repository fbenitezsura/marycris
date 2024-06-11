import { formatAmount, useCart, useProducts } from "medusa-react"
import { useEffect, useMemo } from "react"
import { CalculatedVariant } from "types/medusa"

type useProductPriceProps = {
  id: string
  variantId?: string
}

const useProductPrice = ({ id, variantId }: useProductPriceProps) => {
  const { cart } = useCart()

  const { products, isLoading, isError, refetch } = useProducts(
    {
      id: id,
      cart_id: cart?.id,
    },
    { enabled: !!cart?.id && !!cart?.region_id }
  )

  useEffect(() => {
    if (cart?.region_id) {
      refetch()
    }
  }, [cart?.region_id, refetch])

  const product = products?.[0]

  const getPercentageDiff = (original: number, calculated: number) => {
    const diff = original - calculated
    const decrease = (diff / original) * 100

    return decrease.toFixed()
  }

  const cheapestPrice = useMemo(() => {
    if (!product || !product.variants?.length || !cart?.region) {
      return null
    }

    const variants = product.variants as unknown as CalculatedVariant[]

    const cheapestVariant = variants.reduce((prev, curr) => {
      return prev.calculated_price < curr.calculated_price ? prev : curr
    })

    return {
      calculated_price: cheapestVariant.original_price_incl_tax,
      original_price: cheapestVariant.original_price_incl_tax,
      price_type: cheapestVariant.calculated_price_type,
      percentage_diff: getPercentageDiff(
        cheapestVariant.original_price_incl_tax,
        cheapestVariant.calculated_price
      ),
    }
  }, [product, cart?.region])

  const variantPrice = useMemo(() => {
    if (!product || !variantId || !cart?.region) {
      return null
    }

    const variant = product.variants.find(
      (v) => v.id === variantId || v.sku === variantId
    ) as unknown as CalculatedVariant

    if (!variant) {
      return null
    }

    return {
      calculated_price: variant.original_price,
      original_price: variant.original_price,
      price_type: variant.calculated_price_type,
      percentage_diff: getPercentageDiff(
        variant.original_price,
        variant.calculated_price
      ),
    }
  }, [product, variantId, cart?.region])

  return {
    product,
    cheapestPrice,
    variantPrice,
    isLoading,
    isError,
  }
}

export default useProductPrice
