import { StoreGetProductsParams } from "@medusajs/medusa"
import { useState } from "react";
import CollectionFilter from "./collection-filter"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
  sortBy: SortOptions
  setSortBy: (...args: any[]) => void
  search?: boolean
}

const RefinementList = ({
  refinementList,
  setRefinementList,
  search = false,
}: RefinementListProps) => {
  
  return (
    <>
      <div className="hidden md:flex px-[30px] pt-[25px] pb-[18px] bg-white rounded-[10px] pr-[60px] mt-[20px]">
        {!search && (
          <CollectionFilter 
          refinementList={refinementList}
          setRefinementList={setRefinementList}
          />
        )}
      </div>
    </>

  )
}

export default RefinementList
