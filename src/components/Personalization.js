import personal from '../assets/images/personalization.jpg'
import social from '../assets/images/social-networks.jpg'
import { Facebook, Instagram, Twitter } from '../utils';

const Personalization = () => {
    return ( 
        <section className='px-4'>
            <div className='container mx-auto py-20'>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className='relative overflow-hidden'>
                        <div className=''>
                            <img src={personal} className="w-full" alt="" />
                        </div>
                        <div className="overlay bg-black/40 absolute top-0 w-full h-full ">
                            <div className='absolute bottom-8 md:bottom-12 left-5 md:left-10 w-full text-white'>
                                <h1 className='font-bold uppercase mb-3 text-[12.1px] md:text-2xl'>Personalization</h1>
                                <p className='mb-4 w-[75%] text-[8.73px] md:text-base'>
                                Put a custom print on the football shirt of your choice with our Personalization service.
                                </p>
                                <p className='w-[75%] text-[8.73px] md:text-base'>
                                Tell us what name, what number and we put it. <span className='font-semibold'>FREE!!!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative overflow-hidden'>
                        <div className='w-full'>
                            <img src={social} className="w-full" alt="" />
                        </div>
                        <div className="overlay bg-black/40 absolute top-0 w-full h-full mx-auto">
                            <div className='absolute bottom-8 md:bottom-12 left-5 md:left-10 w-full text-white'>
                                <h1 className='font-bold uppercase mb-3 text-[12.1px] md:text-2xl'>Social networks</h1>
                                <p className='mb-4 text-[8.73px] md:text-base w-full'>Share your shirts with us with the #CamisetasFutbolSpainnn</p>
                                <div className='flex gap-3'>
                                    <button className='bg-white text-black text-[13px] px-2 md:px-3.5 h-8 md:h-10 '><Facebook param="black" /></button>
                                    <button className='bg-white text-black text-[12px] px-1.5 md:px-3 h-8 md:h-10'><Twitter  param="black" className="text-center"/></button>
                                    <button className='bg-white text-black text-[13px] px-1.5 md:px-3 h-8 md:h-10'><Instagram param="black" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Personalization;