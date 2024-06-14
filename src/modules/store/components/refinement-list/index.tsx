import { StoreGetProductsParams } from "@medusajs/medusa"
import SidebarFiltersMobile from '@modules/store/components/refinement-list/sidebar-mobile-filter/index';
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
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="px-[30px] pt-[25px] pb-[18px] bg-white rounded-[10px] pr-[60px] mt-[56px]">
        {!search && (
          <CollectionFilter 
          refinementList={refinementList}
          setRefinementList={setRefinementList}
          closeMobileFilter={()=>{setOpen(false)}}
          />
        )}
      </div>
      <SidebarFiltersMobile
      isOpen={isOpen}
      setOpen={setOpen}
      refinementList={refinementList}
      setRefinementList={setRefinementList}
      />
    </>

  )
}

export default RefinementList
