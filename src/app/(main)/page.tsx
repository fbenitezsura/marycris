import { getCollectionsList } from "@lib/data";
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedCategory from "@modules/home/components/featured-category";
import AboutUs from '@modules/home/components/aboutUs';
import Slider from "@modules/common/components/slider/index"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products";
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "EHFConcept",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}


export default async function Home() {

  const { collections, count } = await getCollectionsList(0, 3);

  return (
    <>
      <Slider
        typeSlider={'banner'}
        data={[{ urlImgDesktop: "/img/banners/banner1.jpeg", urlImgMobile: "/img/banners/banner1m.webp" }, { urlImgDesktop: "/img/banners/banner2.jpeg", urlImgMobile: "/img/banners/banner2.jpeg" }]}
      />
      <FeaturedCategory collections={collections} />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
      <AboutUs />
    </>
  )
}
