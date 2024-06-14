import { getCollectionsList } from "@lib/data";
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedCategory from "@modules/home/components/featured-category";
import AboutUs from '@modules/home/components/aboutUs';
import AboutShop from '@modules/home/components/aboutShop';
import FeaturedArea from '@modules/home/components/featuredArea';
import Slider from "@modules/common/components/slider/index";
import WhyChoose from '@modules/home/components/whyChoose/index';
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products";
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "MaryCris",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}


export default async function Home() {

  const { collections, count } = await getCollectionsList(0, 3);

  return (
    <>
      <Slider
        typeSlider={'banner'}
        data={[{ urlImgDesktop: "/img/banners/banner.webp", urlImgMobile: "/img/banners/banner.webp" }]}
      />
      <AboutShop />
      <FeaturedCategory collections={collections} />
      <WhyChoose />
      <AboutUs />
      <FeaturedArea />
    </>
  )
}
