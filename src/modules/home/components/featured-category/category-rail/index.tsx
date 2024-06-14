import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { ProductCategory } from "@medusajs/medusa"
import CategoryPreview from "@modules/categories/components/category-preview/index"
import Tabs from '@modules/common/components/tabs/index';
import InteractiveLink from "@modules/common/components/interactive-link"

const ProductRail = ({ collections }: { collections: any }) => {

  return (
    <div className="small:py-12 text-center">
      <p className="font-normal text-[18px] font-['Schoolbell'] text-[#96ae00] leading-[1.4] mb-[.5rem]">~ Productos Especiales ~</p>
      <p className="font-bold text-[#2d2a6e] text-[30px] tracking-[-.3px] mb-[.5rem] leading-[38px]">Ofertas Semanales</p>
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
