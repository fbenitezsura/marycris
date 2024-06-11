"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import SortProducts, { SortOptions } from "../components/refinement-list/sort-products"
const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({
    order: 'created_at'
  })
  const [sortBy, setSortBy] = useState({
    value: "created_at",
    label: "Ultimos en llegar",
  })

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-3">
        <RefinementList
          refinementList={params}
          setRefinementList={setParams}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div className="col-span-12 md:col-span-9 grid grid-cols-12">
        <div className="col-span-12 h-auto py-4">
          <SortProducts
            refinementList={params}
            setRefinementList={setParams}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
        <div className="col-span-12">
          <InfiniteProducts params={params} sortBy={sortBy} />
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
