import CardFeatured from './cardFeatured';

const FeaturedArea = () => {

    const featureds = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-1.svg",
            title: "ENTREGA RÁPIDA",
            description: "En todo coronel"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-2.svg",
            title: "PAGO SEGURO",
            description: "100% Pago Seguro"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-3.svg",
            title: "DESCUENTO ONLINE",
            description: "Descuentos por compras múltiples"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-4.svg",
            title: "CENTRO DE AYUDA",
            description: "Soporte dedicado 24/7"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-5.svg",
            title: "ARTÍCULOS SELECCIONADOS",
            description: "De vendedores cuidadosamente seleccionados"
        }
    ];

    return (
        <section className="bg-[url('https://orfarm-next-js.vercel.app/assets/img/shape/footer-shape-1.svg')] bg-cover">
            <div className="container mx-auto">
                <div className="mb-[15px] border-b-[1px]">
                    <div className="grid grid-cols-10 pt-[20px] md:pt-[50px] pb-[10px] md:pb-[40px]">
                        {featureds.map((featured, index) => (
                            <div className="col-span-5 md:col-span-2 flex justify-center">
                                <CardFeatured featured={featured} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FeaturedArea;