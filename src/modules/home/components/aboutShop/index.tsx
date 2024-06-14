const AboutShop = () => {

    const sections = [
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg1.svg",
            title: "Select Your Products",
            description: "Choose from select produce to start. Keep, add, or remove items."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg2.svg",
            title: "Our Shop Orfarm",
            description: "Discover fresh produce, organic options, and much more."
        },
        {
            imgSrc: "https://orfarm-next-js.vercel.app/assets/img/icon/about-svg3.svg",
            title: "Delivery To Your Door",
            description: "Get fresh products delivered to your doorstep, fast and easy."
        }
    ];

    return (
        <div className="mt-[40px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12">
            <div className="col-span-12 xl:px-[20px] flex flex-col text-center mb-[45px]">
                <img className="h-full w-[390px] mx-auto" src="https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-img-1.5046147b.png&w=828&q=75" />
                <p className='text-center mt-[30px]'>
                    We are Online Market of fresh fruits & vegetables. <br />
                    You can also find organic & healthy juice, processed food as <br />
                    well as gentle skin tcare at our store. <br />
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