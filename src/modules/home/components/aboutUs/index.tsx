import Button from '@modules/common/components/button/index';

const AboutUs = () => {

    return (
        <div className="mt-[20px] px-[16px] md:px-[0px] max-w-[1180px] mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:px-[20px]">
                <img className="h-full" src="/img/Team.jpg" />
            </div>
            <div className="col-span-12 md:col-span-6 md:px-[50px] text-center">
                <p className="mt-5">TEAM EHFConcept</p>
                <h2 className="mt-6 text-2xl font-bold">Una marca que cambiara el concepto del diseño.</h2>                
                <p className="mt-5"><strong>Nuestra misión</strong>: Es proporcionar soluciones de diseño inmobiliario unicas y funcionales que satisfagan las necesidades y preferencias del cliente.</p>
                <Button className="mt-5 btn-secondary">Leer más sobre EHFConcept</Button>
            </div>           
        </div>
    )
}

export default AboutUs;