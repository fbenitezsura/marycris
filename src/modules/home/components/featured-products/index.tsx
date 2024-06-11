import { ProductCollection } from "@medusajs/medusa"
import ProductRail from "./product-rail"

const FeaturedProducts = ({
  collections,
}: {
  collections: ProductCollection[]
}) => {
  return (
    <div className="py-2 max-w-[1180px] mx-auto">
      <ul className="flex flex-col gap-x-6 gap-y-8">
        {collections.map((collections) => (
          <li key={collections.id}>
            <ProductRail collections={collections} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedProducts
