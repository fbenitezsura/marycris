import { Metadata } from "next"
import medusaRequest from "@lib/medusa-fetch"
import SearchResultsTemplate from "@modules/search/templates/search-results-template"

export const metadata: Metadata = {
  title: "Search",
  description: "Explore all of our products.",
}

async function getProducts(q: Record<string, any>) {
  const query = {
    q,
    expand: "variants,variants.prices,variants.options",
  }
  const products = await medusaRequest("GET", `/products`, {
    query,
  }).then((res) => res.body.products)

  if (!products) {
    throw new Error(`Failed to search products with: ${query}`)
  }

  return products
}

export default async function StorePage({
  params,
}: {
  params: { query: Record<string, any> }
}) {
  const { query } = params
  const hits = await getProducts(query);

  return <SearchResultsTemplate query={query} hits={hits} />
}
