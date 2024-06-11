import { StoreGetProductsParams } from "@medusajs/medusa"
import { ChangeEvent } from "react"
import Dropdown from '@modules/common/components/listbox';
import { Adjustments } from "@medusajs/icons"
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
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e);
    const order = e.value === 'price_asc' ? 'variants.prices.amount' : e.value === 'price_desc' ? '-variants.prices.amount' : 'created_at'
    setRefinementList({
      ...refinementList,
      order,
    })
  }

  return (
    <div className="content-container max-w-[1180px] w-full h-full flex flex-col md:flex-row justify-start md:justify-end items-center">
      <div className="w-full flex justify-start md:justify-end items-center">
        <Adjustments />
        <span className="m-2">Ordernar por: </span>
      </div>
      <Dropdown
        title="Ordenar por:"
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
        className="w-full md:w-auto min-w-[250px]"
      />
    </div>
  )
}

export default SortProducts
