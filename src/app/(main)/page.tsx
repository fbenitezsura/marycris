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
    "Compra en línea en Emporio Mary Cris y recibe todos tus productos de supermercado en la puerta de tu casa en Coronel. Ahorra tiempo evitando filas y disfruta de entregas rápidas y seguras. ¡Usa el código EFECTIVO10 para un 10% de descuento al pagar con transferencia!",
}


export default async function Home() {

  const { collections, count } = await getCollectionsList(0, 7);

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
