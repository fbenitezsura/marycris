import { ProductCategory } from "@medusajs/medusa"
import CategoryRail from "./category-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: any
}) => {
  return (
    <div className="py-12 max-w-[1180px] mx-auto">
      <CategoryRail collections={collections} />
    </div>
  )
}

export default FeaturedProducts
