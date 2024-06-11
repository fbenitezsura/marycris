"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import { Heading, Text } from "@medusajs/ui"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import Link from "next/link"
import { useEffect, useState } from "react"
import UnderlineLink from "@modules/common/components/interactive-link"
type SearchResultsTemplateProps = {
  query: string
  hits: Record<string, any>[]
}

const SearchResultsTemplate = ({ query, hits }: SearchResultsTemplateProps) => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at");

  useEffect(() => {
    setParams({
      id: hits?.map((h) => (h.hasOwnProperty("objectID") ? h.objectID : h.id)),
    })
  }, [hits])

  if (!hits) {

    return (
      <div className="w-full flex flex-col justify-center mt-10 py-6 items-center">
        <div>
          <p>No se han encontrado resultados para: <span className="font-bold">"{query}"</span></p>
        </div>
        <div className="border border-[#FF5733] p-5 w-[220px] flex justify-center mt-10">
          <UnderlineLink href="/store">Ir a la tienda</UnderlineLink>
        </div>
      </div>
    )

  }

  return (
    <div>
      <div className="flex justify-between border-b w-full py-6 px-8 small:px-14 items-center">
        <div className="flex flex-col items-start">
          <Text className="text-ui-fg-muted">Buscando para:</Text>
          <Heading>
            {query} ({hits?.length})
          </Heading>
        </div>
        <Link
          href="/store"
          className="txt-medium text-ui-fg-subtle hover:text-ui-fg-base"
        >
          Limpiar
        </Link>
      </div>
      <div className="flex flex-col small:flex-row small:items-start py-6">
        {hits.length > 0 ? (
          <>
            <RefinementList
              refinementList={params}
              setRefinementList={setParams}
              sortBy={sortBy}
              setSortBy={setSortBy}
              search
            />
            <div className="mt-10"/>
            <InfiniteProducts params={params} sortBy={sortBy} />
          </>
        ) : (
          <Text className="ml-8 small:ml-14 mt-3">Sin resultados.</Text>
        )}
      </div>
    </div>
  )
}

export default SearchResultsTemplate
