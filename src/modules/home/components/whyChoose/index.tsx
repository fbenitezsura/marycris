import CardBenefit from './cardBenefit';

const WhyChoose = () => {

    const benefits = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon1.svg",
            title: "Amplia Selección",
            description: "Explora nuestra variedad de productos de alta calidad. Personaliza tus preferencias y disfruta de una experiencia adaptada a tus necesidades."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon2.svg",
            title: "Precios Competitivos",
            description: "Ofrecemos precios accesibles para ti. Ajusta tus opciones y disfruta de una experiencia personalizada al instante."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon3.svg",
            title: "Atención Personalizada",
            description: "Estamos aquí para apoyarte en cada etapa. Personaliza tu experiencia y disfruta de una atención de calidad.."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon4.svg",
            title: "Calidad Garantizada",
            description: "Comprometidos con ofrecer productos de excelencia. Explora nuestras opciones y disfruta de sus beneficios."
        }
    ];

    return (
        <section className="bg-[url('https://orfarm-next-js.vercel.app/assets/img/shape/choos-bg-1.svg')] bg-cover pb-[80px] min-h-[630px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <div className="pt-[75px] mb-[35px]">
                            <h4 className="text-[#96ae00] mb-[8px]">~ Porque elegirnos ? ~</h4>
                            <h4 className="text-[#2d2a6e] mb-[8px] font-bold text-[30px] leading-[38px] tracking-[-.3px]">Que nos hace diferente</h4>
                            <p className="text-[15px] leading-[22px] text-[#4d5574]">Nuestra selección única de huevos frescos y orgánicos, junto con útiles de aseo de calidad, garantiza satisfacción y conveniencia.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-[30px]">
                    {benefits.map((benefit, index) => (
                        <div className="col-span-12 md:col-span-3 flex justify-around mb-2 md:mb-0">
                          <CardBenefit benefit={benefit}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default WhyChoose;