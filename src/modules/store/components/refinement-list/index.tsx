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
      <div className="hidden md:flex small:flex-col gap-12 px-8 py-4 mb-8 small:pr-0 small:pl-8 small:min-w-[250px] small:ml-[1.675rem]">
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
