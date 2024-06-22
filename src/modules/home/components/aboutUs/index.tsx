import Button from '@modules/common/components/button/index';

const AboutUs = () => {

    return (
        <div className="mt-[20px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12 mb-[30px]">
            <div className="col-span-12 md:col-span-6 xl:px-[20px]">
                <img className="h-full" src="/img/banners/banner-team.webp" />
            </div>
            <div className="col-span-12 md:col-span-6 md:px-[50px] text-center">
                <p className="mt-5">Team Mary Cris</p>
                <h2 className="mt-6 text-2xl font-bold">Una marca que cambiará tu experiencia de compra.</h2>                
                <p className="mt-5"><strong>Nuestra misión</strong>: Proporcionar productos frescos y de alta calidad, así como útiles de aseo esenciales, para satisfacer las necesidades y preferencias de nuestros clientes.</p>
                <button className="p-6 mt-5 text-white rounded-md bg-[#2D2A6E]">Leer más sobre Mari Cris</button>
            </div>           
        </div>
    )
}

export default AboutUs;