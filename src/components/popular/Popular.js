import { useState, useEffect } from "react";
import { Left, Right } from "../../utils";
import PopularCard from "./PopularCard";
import axios from "axios";


const Popular = () => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        const getProducts = async (url) => {
            try{
                const response =  await axios.get(url);
                setProducts(response.data.categories.data);
    
            }catch(e){
                console.log(e);
            }
        }
        getProducts('https://camiestas-futbol.effectstudios.co/api/v1/product-category')
    }, [])
    return ( 
        <section className="container px-4 mx-auto mb-20">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl md:text-[30px] uppercase mb-10">Most Popular T-Shirts</h2>
                <div className="flex gap-4">
                    <button className='bg-white border text-[13px] px-3.5 h-10 '><Left/></button>
                    <button className='bg-white border text-[13px] px-3.5 h-10 '><Right param={'black'}/></button>
                </div>
            </div>
            <div className="flex space-x-6 overflow-auto">
                {products.length > 0 ? products.map(product => <PopularCard key={product.id} product={product}/>) : null }
                {/* <PopularCard/>
                <PopularCard/>
                <PopularCard/>
                <PopularCard/>
                <PopularCard/>
                <PopularCard/>
                <PopularCard/> */}
            </div>
        </section>
     );
}
 
export default Popular;