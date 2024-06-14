import { getCollectionsList } from "@lib/data";
import FeaturedCategory from "@modules/home/components/featured-category";
import AboutUs from '@modules/home/components/aboutUs';
import AboutShop from '@modules/home/components/aboutShop';
import Slider from "@modules/common/components/slider/index";
import WhyChoose from '@modules/home/components/whyChoose/index';
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
    </>
  )
}
