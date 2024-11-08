const AboutShop = () => {

    const sections = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg1.svg",
            title: "Selecciona tus Productos",
            description: "Elige entre una amplia variedad de productos de calidad. Mantén, agrega o elimina artículos según tus necesidades."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg2.svg",
            title: "Nuestra Tienda Online",
            description: "Descubre opciones frescas, orgánicas y una amplia gama de artículos para el hogar."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg3.svg",
            title: "Entrega a tu Puerta",
            description: "Recibe tus productos directamente en la puerta de tu casa, de manera rápida y fácil."
        }
    ];

    return (
        <div className="mt-[40px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12">
            <div className="col-span-12 xl:px-[20px] flex flex-col text-center mb-[45px]">
                <img className="h-full w-[390px] mx-auto rounded-[1px]" src="/img/banners/nature.webp" />
                <p className='text-center mt-[30px]'>
                    <strong>Somos una tienda en línea especializada en productos de alta calidad.</strong>
                    Además de nuestra amplia variedad de artículos, también ofrecemos una selección de productos para el hogar de excelencia. <br />
                    ¡Visítanos y descubre la calidad de nuestros productos y la excelencia de nuestro servicio!
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