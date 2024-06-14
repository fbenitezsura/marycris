import CardFeatured from './cardFeatured';

const FeaturedArea = () => {

    const featureds = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-1.svg",
            title: "FAST DELIVERY",
            description: "Across West & East India"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-2.svg",
            title: "SAFE PAYMENT",
            description: "100% Secure Payment"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-3.svg",
            title: "ONLINE DISCOUNT",
            description: "Add Multi-buy Discounts"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-4.svg",
            title: "HELP CENTER",
            description: "Dedicated 24/7 Support"
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/feature-icon-5.svg",
            title: "CURATED ITEMS",
            description: "From Handpicked Sellers"
        }
    ];

    return (
        <section className="bg-[url('https://orfarm-next-js.vercel.app/assets/img/shape/footer-shape-1.svg')] bg-cover mt-[30px]">
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