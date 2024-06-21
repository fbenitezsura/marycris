import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import FastDelivery from "@modules/common/icons/fast-delivery"
import { useMemo } from "react"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {

  const tabs = useMemo(() => {
    return [
      {
        label: "Descripción del producto",
        component: <ProductDescriptionTab product={product} />,
      },
      {
        label: "Información del producto",
        component: <ProductInfoTab product={product} />,
      },
      /*{
        label: "Envío y devoluciones",
        component: <ShippingInfoTab />,
      },*/
    ]
  }, [product])

  return (
    <div className="w-full bg-white rounded-[10px] pt-[10px] md:pt-[20px] px-[10px] md:px-[40px] pb-[16px]">
      <TabGroup>
        <TabList className="flex gap-4 border-b-[1px] border-[#e6ecf0] mb-[30px] justify-center">
          {tabs.map(({ label }) => (
            <Tab
              key={label}
              className="py-1 px-3 text-[14px] font-bold text-[#96AE00] focus:outline-none data-[selected]:border-b-[2px] data-[selected]:border-[#96ae00]  data-[selected]:bg-white/10 
                data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white uppercase"
            >
              {label}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {tabs.map(({ label, component }) => (
            <TabPanel key={label} className="rounded-xl bg-white/5 p-3">
              {component}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  )
}

const ProductDescriptionTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="w-full">
      <h5 className="text-[#2d2a6e] text-[18px] font-semibold leading-[19px] uppercase">Detalle del producto</h5>
      <div className="mt-4">
        <p className="mt-2 text-gray-600">
          Descubre la maravilla natural del huevo, un alimento esencial en la cocina y en la vida diaria. Con su interior nutritivo, el huevo es sinónimo de versatilidad y salud.
        </p>
        <p className="mt-2 text-gray-600">
          Desde el desayuno hasta la cena, los huevos aportan un equilibrio perfecto de proteínas de alta calidad, grasas saludables y vitaminas esenciales. Ideales para cualquier receta, los huevos son una elección inteligente y deliciosa para mantener una dieta equilibrada.
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>La clara es rica en proteínas, perfecta para fortalecer el cuerpo.</li>
          <li>Yema con grasas buenas y vitaminas A, D, E y K</li>
        </ul>
        <p className="mt-4 text-gray-600">
          No es solo un huevo, es el ingrediente esencial que transforma tus platos en experiencias culinarias.
        </p>
      </div>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="w-full">
      <h5 className="text-[#2d2a6e] text-[18px] font-semibold leading-[19px] uppercase mb-[20px]">Información del producto</h5>
      <ul className="max-w-[780px]">
  <li className="flex py-[10px] text-[12px] md:text-[14px] font-semibold justify-between">
    <p>Tamaño de la porción: 45g (1 huevo sin cáscara)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">100g</p>
      <p className="ml-2 md:w-[140px]">Por porción:</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Energía (Kcal)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">130</p>
      <p className="ml-2 w-[49px] md:w-[140px]">58,5</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Proteínas (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">12,5</p>
      <p className="ml-2 w-[49px] md:w-[140px]">5,625</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Grasa Total (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">8</p>
      <p className="ml-2 w-[49px] md:w-[140px]">3,6</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Grasa Saturada (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">2,7</p>
      <p className="ml-2 w-[49px] md:w-[140px]">1,215</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Grasa Mono insaturada (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">3</p>
      <p className="ml-2 w-[49px] md:w-[140px]">1,35</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Grasa Poliinsaturada (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">2</p>
      <p className="ml-2 w-[49px] md:w-[140px]">0,9</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Grasa Trans (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">0</p>
      <p className="ml-2 w-[49px] md:w-[140px]">0</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Colesterol (mg)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">260</p>
      <p className="ml-2 w-[49px] md:w-[140px]">117</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>H. de carbono disp. (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">2,1</p>
      <p className="ml-2 w-[49px] md:w-[140px]">0,945</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Azúcares Totales (g)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">0,4</p>
      <p className="ml-2 w-[49px] md:w-[140px]">0,18</p>
    </div>
  </li>
  <li className="flex py-[10px] text-[12px] md:text-[14px] justify-between">
    <p>Sodio (mg)</p>
    <div className="ml-1 flex justify-between">
      <p className="md:w-[60px]">144</p>
      <p className="ml-2 w-[49px] md:w-[140px]">64,8</p>
    </div>
  </li>
</ul>


    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Entrega rápida</span>
            <p className="max-w-sm">
              Su paquete llegará en 5-7 días hábiles al momento de su recogida.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
