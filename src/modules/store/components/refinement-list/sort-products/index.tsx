import { StoreGetProductsParams } from "@medusajs/medusa"
import { ChangeEvent, useState } from "react"
import Dropdown from '@modules/common/components/listbox';
import { Adjustments } from "@medusajs/icons";
import SidebarFiltersMobile from '@modules/store/components/refinement-list/sidebar-mobile-filter/index';
export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: string) => void,
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Ultimos en llegar",
  },
  {
    value: "price_asc",
    label: "Precio Menor",
  },
  {
    value: "price_desc",
    label: "Precio Mayor",
  },
]

const SortProducts = ({ sortBy, setSortBy, refinementList, setRefinementList }: SortProductsProps) => {
  
  const [isOpen, setOpen] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e);
    const order = e.value === 'price_asc' ? 'variants.prices.amount' : e.value === 'price_desc' ? '-variants.prices.amount' : 'created_at'
    setRefinementList({
      ...refinementList,
      order,
    })
  }

  return (
    <div className="content-container md:max-w-[1110px] h-[56px] w-full flex justify-between md:justify-end items-center bg-white md:ml-[15px] md:pr-[10px] rounded-md">
      <Dropdown
        title=""
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
        className="w-full md:w-auto min-w-[250px]"
      />
      <SidebarFiltersMobile
      isOpen={isOpen}
      setOpen={setOpen}
      refinementList={refinementList}
      setRefinementList={setRefinementList}
      />
    </div>
  )
}

export default SortProducts
