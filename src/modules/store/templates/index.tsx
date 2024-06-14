"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useState } from "react"
import SortProducts, { SortOptions } from "../components/refinement-list/sort-products";
import Image from "next/image"
const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({
    order: 'created_at'
  })
  const [sortBy, setSortBy] = useState({
    value: "created_at",
    label: "Ultimos en llegar",
  })

  return (
    <section className="bg-[#F2F2F6]">
      <div className="md:container md:mx-auto">
        <div className="grid-cols-12 flex justify-center">
          <div className="col-span-12 md:col-span-3">
            <RefinementList
              refinementList={params}
              setRefinementList={setParams}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <div className="col-span-12 md:col-span-3">
              <div className="hidden md:block rounded-[10px] mt-[10px]">
                <img className="mr-[60px] bg-cover" height={'100%'} src="https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fsidebar-product-1.png&w=640&q=75" width={'100%'} />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-12">
            <div className="col-span-12 mt-[20px] relative mx-[16px] md:mx-0">
              <img className="md:ml-[15px] md:mr-[15px] rounded-[10px] max-w-[1110px] min-h-[213px]" width="100%" src="https://orfarm-next-js.vercel.app/assets/img/banner/shop-bg-1.jpg" />
              <div className="absolute top-0 w-full h-full flex items-center justify-center flex-col">
                <p className="text-[#FFBB88] text-[14px] uppercase font-semibold">Huevos</p>
                <h4 className="text-white font-bold text-[24px] mb-[20px]">Productos naturales y frescos</h4>
                <p className="text-white">¡No te pierdas nuestras ofertas actuales!</p>
              </div>
            </div>
            <div className="col-span-12 h-auto py-4 mx-[16px] md:mx-0">
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
      </div>

    </section>
  )
}

export default StoreTemplate
