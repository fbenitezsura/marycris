const CardFeatured = ({
    featured
}) => {
    return (
        <div className="h-auto max-w-[288px] py-[30px] px-[20px] rounded-[20px] text-center">
            <img className="mx-auto mb-[10px]" src={featured.imgSrc}></img>
            <h3 className="font-bold text-[12px] text-white">{featured.title}</h3>
            <p className="text-[14px] text-[#b0afcc]">{featured.description}</p>
        </div>
    );
};

export default CardFeatured;