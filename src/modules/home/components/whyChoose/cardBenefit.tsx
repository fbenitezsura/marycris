const CardBenefit = ({
    benefit
}) => {
    return (
        <div className="h-[256px] max-w-[336px] bg-white py-[30px] px-[20px] rounded-[20px] text-center">
            <img className="mx-auto mb-[15px]" src={benefit.imgSrc}></img>
            <h3 className="font-bold text-[16px] text-[#2d2a6e] mb-[15px]">{benefit.title}</h3>
            <p className="text-[16px] text-[#4d5574]">{benefit.description}</p>
        </div>
    );
};

export default CardBenefit;