import { Right } from '../../utils';

const Collectionitem = ({ item }) => {
    return ( 
        <section className='border'>
            <div className='relative'>
                <div className='w-full'>
                    <img src={item.image} className="w-full" alt="" />
                </div>
                <div className="overlay absolute top-0 w-full h-full mx-auto">
                    <div className='flex absolute bottom-0 w-full'>
                        <p className="flex-1 backdrop-blur text-[14px] h-10 leading-10 text-white px-4">{item.title}</p>
                        <button className='bg-[#F9DC38] text-white text-[13px] px-4'><Right param={'black'}/></button>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Collectionitem;