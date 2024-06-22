"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductHeader from "@modules/products/templates/product-info/product-header"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ImageGallery from "@modules/products/components/image-gallery"
import MobileActions from "@modules/products/components/mobile-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "../components/product-actions";
import ProductSidebar from '@modules/products/components/product-sidebar/index';

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
    <ProductProvider product={product}>
      <div className="bg-[#f2f2f6]">
        <div className="container mx-auto mb-[30px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-10 mt-[45px] w-full relative bg-white grid grid-cols-12 pt-[30px] px-[5px] md:px-[40px] pb-[35px] rounded-[10px]">
              <div className="col-span-12 mb-[25px] pb-[25px] h-[65px]">
                <ProductHeader product={product} />
              </div>
              <div className="col-span-12 grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 px-[12px]">
                  <ImageGallery images={product?.images || []} />
                </div>
                <div className="col-span-12 md:col-span-6 px-[12px]">
                  <div className="flex flex-col w-full">
                    <ProductActions product={product} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 mt-[45px] md:ml-2">
              <ProductSidebar />
            </div>
          </div>
        </div>
        <div className="container mx-auto pb-[50px]">
          <ProductTabs product={product} />
        </div>
        <div className="container mx-auto">
          <RelatedProducts product={product} />
        </div>
        <MobileActions product={product} show={!inView} />
      </div>
    </ProductProvider>
  )
}

export default ProductTemplate
