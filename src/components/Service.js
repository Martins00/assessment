import { Quality, Phone, Shipping, Whatsapp } from "../utils";

const Service = () => {
    return ( 
        <section className="py-14 px-4 ">
            <div className="container mx-auto">
                <div className="grid justify-between grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="card  h-[9rem] bg-[#FEFAE1]">
                        <Shipping/>
                        <div className="ml-5 mt-5 ">
                            <p className="font-bold leading-4 text-[10px] md:text-[12px] lg:text-base -mb-1">Secure Shipping</p>
                            <span className="font-normal text-[8px] md:text-[10px] lg:text-xs">on all orders</span>
                        </div>
                    </div>
                    <div className="card  h-[9rem] bg-[#FEFAE1]">
                        <Phone/>
                        <div className="ml-5 mt-5">
                            <p className="font-bold leading-4 text-[10px] md:text-[12px] lg:text-base -mb-1">Telephone</p>
                            <span className="font-normal text-[8px] md:text-[10px] lg:text-xs">+1 23 456 7890</span>
                        </div>
                    </div>
                    <div className="card  h-[9rem] bg-[#FEFAE1]">
                        <Whatsapp/>
                        <div className="ml-5 mt-5">
                            <p className="font-bold leading-4 text-[10px] md:text-[12px] lg:text-base mb-2">Chat WhatsApp</p>
                            <span className=" block font-normal leading-1 text-[8px] md:text-[10px] lg:text-xs">Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00</span>
                        </div>
                    </div>
                    <div className="card  h-[9rem] bg-[#FEFAE1]">
                        <Quality/>
                        <div className="ml-5 mt-5">
                            <p className="font-bold leading-4 text-[10px] md:text-[12px] lg:text-base -mb-1">Quality Guarantee</p>
                            <span className="font-normal m-0 text-[8px] md:text-[10px] lg:text-xs">Verified Purchase Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Service;