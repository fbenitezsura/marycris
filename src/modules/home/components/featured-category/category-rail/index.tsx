import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCategory } from "@medusajs/medusa"
import CategoryPreview from "@modules/categories/components/category-preview/index"
import Tabs from '@modules/common/components/tabs/index';
import InteractiveLink from "@modules/common/components/interactive-link"

const ProductRail = ({ collections }: { collections: any }) => {

  return (
    <div className="small:py-12 text-center">
      <p className="text-[12px] text-black">Diseñado para mejorar tu rendimiento</p>
      <p className="text-[24px] font-bold">Nuestros Bestsellers</p>
      <div className="w-full flex justify-center">
        {collections && <Tabs
          type={'collection'}
          collections={collections}
        />}
      </div>
    </div>
  )
}

export default ProductRail
