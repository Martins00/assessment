import { Paperplane, Facebook, Twitter, Instagram } from "../utils";
import payment from '../assets/images/payment-partners.png'

const Footer = () => {
    return ( 
        <section className="bg-[#F5F5F6] ">

            <div className="footer-links px-4 py-10  md:py-8">
                <div className="container mx-auto grid grid-cols-1 space-y-5 md:space-x-10 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <h3 className="font-bold mb-5">Main Menu</h3>
                        <ul>
                            <li className="mb-2">Home</li>
                            <li className="mb-2">T-Shirts</li>
                            <li className="mb-2">NBA</li>
                            <li className="mb-2">Tracksuits</li>
                            <li className="mb-2">Products Delivery • 1 – 2 days</li>
                            <li className="mb-2">Contact</li>
                            <li className="mb-2">Reviews</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-5">Secondary Menu</h3>
                        <ul>
                            <li className="mb-2">Search</li>
                            <li className="mb-2">Privacy policy</li>
                            <li className="mb-2">Shipping policy</li>
                            <li className="mb-2">Returns policy</li>
                            <li className="mb-2">Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold ">Subscribe</h3>
                        <p className="my-5 ">Subscribe to our mailing list to receive the latest news.</p>
                        <form className="pr-9 flex w-full ">
                            <input type="text" className="border outline-none rounded-none text-gray-900 text-sm block w-full h-12 p-2.5" placeholder="Email Address"  required/>
                            <button type="button" className="text-white bg-yellow-500 font-medium text-sm px-4 "><Paperplane/></button>
                        </form>
                    </div>
                    <div>
                        <h3 className="mb-5 font-bold">Follow Us</h3>
                        <div className='flex space-x-3'>
                            <button className='bg-black text-[13px] px-3.5 h-10 '><Facebook param="white"/></button>
                            <button className='bg-black text-[12px] px-3 h-10'><Twitter  param="white" className="text-center"/></button>
                            <button className='bg-black text-[13px] px-3 h-10'><Instagram param="white" /></button>
                        </div>
                    </div>
                </div>
                
            </div>
            <img className="block px-4 mb-14 md:hidden" src={payment} alt="" />
            <div className="border-t px-4 py-5">
                <div className="container mx-auto flex justify-between">
                    <p>© 2021 Jambulani  •  All rights reserved</p>
                    <img className="hidden md:block" src={payment} alt="" />
                </div>
            </div>
        </section>
     );
}
 
export default Footer;