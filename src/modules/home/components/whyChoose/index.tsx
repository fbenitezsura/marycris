import CardBenefit from './cardBenefit';

const WhyChoose = () => {

    const benefits = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon1.svg",
            title: "100% Fresh Food",
            description: "Adjust global theme options and see design changes in real-time."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon2.svg",
            title: "Premium Quality",
            description: "Adjust global theme options and see design changes in real-time."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon3.svg",
            title: "100% Natural",
            description: "Adjust global theme options and see design changes in real-time."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/choose-icon4.svg",
            title: "100% Organic",
            description: "Adjust global theme options and see design changes in real-time."
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
                            <p className="text-[15px] leading-[22px] text-[#4d5574]">The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>
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
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        <p className="text-[#4d5574] text-[16px]">Our nearly 1.4K committed staff members are ready to help. <span className="text-[#96ae00]">Help Center.</span></p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default WhyChoose;