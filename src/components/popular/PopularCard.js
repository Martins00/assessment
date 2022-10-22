import { Link } from 'react-router-dom';

const PopularCard = ({product}) => {
    
    return ( 
        <section className='border'>
            <Link to={`/${product.slug}`}>
                <div className='relative w-[220px]'>
                    <div className='w-full'>
                        <img src={product.image} className="w-full" alt="" />
                    </div>
                    <div className="overlay absolute top-0 w-full h-full mx-auto">
                        <button className='bg-green-500 text-white text-[13px] px-2 py-1 absolute bottom-4 left-4'>Save 67%</button>
                    </div>
                </div>
                <div className="card-details p-4 text-[14px]">
                    <p className="text-[14px]">Manchester United 21-22</p>
                    <p>Home Shirt</p>
                    <span className='mr-2 text-[20px] font-bold'>€30.00</span>
                    <span className='text-underline text-red-500 text-xs mb-2 line-through'>€89.95</span>
                </div>
            </Link>
        </section>
     );
}
 
export default PopularCard;