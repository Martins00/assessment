import { Heart, ShoppingCartWhite } from "../utils";
 
const Product = ({prod}) => {
    return ( 
        <section className="container mx-auto px-4 md:px-6 py-20">
            <div className="grid lg:grid-cols-2 justify-center gap-8">
                <div className="img  ">
                    <div className='w-full mb-5'>
                        <img src={prod?.image} className="w-full" alt="" />
                    </div>
                    <div className='flex gap-2 brorder'>
                        <div className='w-full'>
                            <img src={prod?.image} className="w-full" alt="" />
                        </div>
                        <div className='w-full'>
                            <img src={prod?.image} className="w-full" alt="" />
                        </div>
                        <div className='w-full'>
                            <img src={prod?.image} className="w-full" alt="" />
                        </div>
                        <div className='w-full'>
                            <img src={prod?.image} className="w-full" alt="" />
                        </div>
                        <div className='w-full'>
                            <img src={prod?.image} className="w-full" alt="" />
                        </div>
                        
                    </div>

                </div>
                <div className="form">
                    <p className="font-bold">Manchester United 21-22 Home Shirt</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <span className='mr-2 text-[40px] font-bold'>€30.00</span>
                            <span className='text-underline text-red-500 text-base mx-2 line-through'>€89.95</span>
                            <button className='bg-green-500 text-white text-base px-2 py-1 min-w-max'>Save 67%</button>
                        </div>
                        <div>
                            <button className="bg-white ml-2 px-3 py-2.5 flex items-center border"><Heart/> <span className="ml-1.5 text-xs hidden min-w-max md:inline">Add to Favourites</span></button>
                        </div>
                    </div>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... <span className="font-bold underlined">Read More</span>
                    </p>

                    <form action="">
                        <div className="flex items-center space-x-2 mb-4">
                            <label htmlFor="" className="basis-1/3 text-xs font-semibold">Size</label>
                            <select className="border outline-none rounded-none text-gray-900 text-sm block w-full h-10 p-2.5" placeholder="Select a Shirt Size">
                                <option value="Select a Shirt Size">Select a Shirt Size</option>    
                            </select>   
                            <button className="bg-[#EAEAEC] px-3 py-2.5 border text-xs min-w-max font-semibold">View Size Chart</button>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <label htmlFor="" className="basis-1/4 text-xs font-semibold">Name</label>
                            <input className="border outline-none rounded-none text-gray-900 text-sm block w-full h-10 p-2.5" type="text" placeholder="What name would you want on the shirt"/>   
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <label htmlFor="" className="basis-1/4 text-xs font-semibold">Number on Shirt</label>
                            <input className="border outline-none rounded-none text-gray-900 text-sm block w-full h-10 p-2.5" type="text" placeholder="Enter a number between 0 and 99"/>   
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <label htmlFor="" className="basis-1/4 text-xs font-semibold">Patch</label>
                            <select className="border outline-none rounded-none text-gray-900 text-sm block w-full h-10 p-2.5" placeholder="Select a Shirt Size">
                                <option value="Select a Shirt Size">Select a Patch</option>    
                            </select>
                        </div>       
                        <div className="flex items-center space-x-2">
                            <label htmlFor="" className="basis-1/5 text-xs font-semibold">Quantity</label>
                            <input className="border outline-none rounded-none text-gray-900 text-sm block w-20 mr-1 h-10 p-2.5" type="text" placeholder="1"/>
                        </div>

                        <div className="pr-9 w-full mt-20 flex ">
                            <span className="py-2 px-4 font-semibold w-full bg-yellow-500">Add to Cart</span>
                            <button type="button" className="text-white bg-black font-medium text-sm px-4 py-2"><ShoppingCartWhite/></button>
                        </div>    
                    </form>


                </div>
            </div>
        </section>
     );
}
 
export default Prod?uct;