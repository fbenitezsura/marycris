import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

type ProductHeaderProps = {
    product: PricedProduct
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {

    console.log('product', product)

    return (
        <div id="product-info">
            <div className="flex flex-col lg:max-w-[500px]">
                <Heading level="h2" className="text-[24px] leading-[35px] mb-[8px] text-[#2d2a6e] font-medium">
                    {product.title}
                </Heading>

                <ul>
                    <li className="flex mr-[15px] pr-[21px] border-r-[1px] border-[#e6ecf0]">
                        <p className="text-[#455770] font-normal text-[13px] mr-1">Categoria:</p>
                        {product.collection && (
                            <Link
                                href={`/collections/${product.collection.handle}`}
                                className="text-medium text-[#96ae00] font-medium text-[13px]"
                            >
                                {product.collection.title}
                            </Link>
                        )}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default ProductHeader
