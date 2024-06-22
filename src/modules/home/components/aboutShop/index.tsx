const AboutShop = () => {

    const sections = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg1.svg",
            title: "Selecciona tus Productos",
            description: "Elige entre una variedad de huevos frescos y útiles de aseo. Mantén, agrega o elimina artículos según tus necesidades."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg2.svg",
            title: "Nuestra Tienda Ovhuevos",
            description: "Descubre huevos frescos, opciones orgánicas y una amplia gama de útiles de aseo."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg3.svg",
            title: "Entrega a tu Puerta",
            description: "Recibe productos frescos y útiles de aseo en la puerta de tu casa, de manera rápida y fácil."
        }
    ];

    return (
        <div className="mt-[40px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12">
            <div className="col-span-12 xl:px-[20px] flex flex-col text-center mb-[45px]">
                <img className="h-full w-[390px] mx-auto rounded-[1px]" src="/img/banners/nature.webp" />
                <p className='text-center mt-[30px]'>
                    Somos una tienda en línea especializada en huevos frescos.<br />
                    Además de nuestra amplia variedad de huevos, también ofrecemos una selección de útiles de aseo de alta calidad.<br />
                    ¡Visítanos y descubre la frescura de nuestros huevos y la excelencia de nuestros productos de aseo!
                </p>
            </div>
            {sections.map((section, index) => (
                <div key={index} className="col-span-12 md:col-span-4 md:px-[20px] text-center flex flex-col">
                    <img className="mx-auto mb-[15px]" src={section.imgSrc}></img>
                    <h3 className="font-bold text-[16px] text-[#2d2a6e] mb-[15px]">{section.title}</h3>
                    <p className="text-[16px] text-[#4d5574]">{section.description}</p>
                </div>
            ))}
        </div>
    )
}

export default AboutShop;