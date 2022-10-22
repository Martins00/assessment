
import { Bag,Indicator, IndicatorOne,IndicatorTwo, Responsiveindicator, ResponsiveindicatorOne, ResponsiveindicatorTwo } from "../../utils";
const Carouseldetail = ({banner, index}) => {
    return (
        <section className="">
            <div className='relative'>
                <div className='min-h-[300px]'>
                    <img src={banner.image} className="object-cover w-full h-[300px]" alt="" />
                </div>
                <div className="overlay bg-black/40 absolute top-0 w-full h-full ">
                    <div className='absolute bottom-8 top-6 md:top-12 left-5 md:left-10 leading-none w-full text-white'>
                        <h1 className='font-bold text-white mb-3 text-[24px] md:text-[40px] '>Your favorite customized</h1>
                        <h1 className='font-bold text-yellow-400 mb-3 text-[24px] md:text-[40px] '>Club jerseys.</h1>
                    </div>
                    <div className="absolute bottom-5 left-2 hidden md:block md:left-10 md:bottom-10">
                        {index === 0 && <Indicator/>}
                        {index === 1 && <IndicatorOne/>}
                        {index === 2 && <IndicatorTwo/>}
                    </div>
                    <div className="absolute bottom-5 left-2 block md:hidden md:left-10 md:bottom-10">
                        {index === 0 && <Responsiveindicator/>}
                        {index === 1 && <ResponsiveindicatorOne/>}
                        {index === 2 && <ResponsiveindicatorTwo/>}
                    </div>
                    <div className="flex absolute bottom-5 right-4 md:right-5 md:bottom-10">
                        <div className="border-2 rounded-none bg-none text-xs md:text-sm px-2 py-1.5 text-white" >{banner.btn_text}</div>
                        <button type="button" className="text-white bg-white font-medium text-sm px-4 "><Bag/></button>
                    </div>

                </div>
            </div>

        </section>

     );
}
 
export default Carouseldetail;