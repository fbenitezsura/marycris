'use client'
import { Splide } from '@splidejs/react-splide';
import SlideBanner from '@modules/common/components/slider/slides/Banner/index';

interface Slider {
    data?: Array<any>
    typeSlider?: string,
    options?: Array<Object>
}
const Slider = ({
    data,
    typeSlider,
    options
} : Slider ) => {

    return (
        <Splide 
        options={{
        ...options
        }}
        aria-label="Banners">
            {data?.map((slideProps) => {

                if(typeSlider === 'banner'){
                    return (
                        <SlideBanner slideProps={slideProps}/>
                    )
                }
                
            })}            
        </Splide>
    )

}

export default Slider;