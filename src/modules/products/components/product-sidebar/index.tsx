const ProductSidebar = () => {

    return (
        <div className="pb-[30px] w-full">
            <div className="border-[1px] border-[#e8c3c3] rounded-[10px] px-[25px] py-[30px]">
                <ul className="text-[#b45353]">
                    <li className="flex flex-col items-center justify-center pb-[30px] mb-[26px] border-b-[1px] border-dashed border-[#e8c3c3] text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <span className="mt-2">El envío gratuito se aplica a todos.
                            pedidos superiores a $90</span>
                    </li>
                    <li className="flex flex-col items-center justify-center pb-[30px] mb-[26px] border-b-[1px] border-dashed border-[#e8c3c3] text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                        <span className="mt-2">Garantizado 100% orgánico
                            de granjas naturales</span>
                    </li>
                    <li className="flex flex-col items-center justify-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <span className="mt-2">Garantizado 100% orgánico
                            de granjas naturales</span>
                    </li>
                </ul>
            </div>
            <div className="hidden md:block rounded-[10px] mt-[10px]">
                <img className="mr-[60px] bg-cover" height={'100%'} src="https://orfarm-next-js.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2Fsidebar-product-1.png&w=640&q=75" width={'100%'} />
            </div>
        </div>
    )
}

export default ProductSidebar;