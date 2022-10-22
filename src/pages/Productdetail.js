import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const Productdetail = () => {
    const { slug } = useParams()
    const [prod, setProd] = useState([])
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        const getProduct = async (url)=>{
            try{
                const response =  await axios.get(url);
                setProd(response.data.category);
    
            }catch(e){
                console.log(e);
            }
        }
        getProduct(`https://camiestas-futbol.effectstudios.co/api/v1/product-category-slug/${slug}`)
    }, [slug])
    return ( 
        <section className="mt-[4.5rem] sm:mt-[20rem]]">
            <Product prod={prod}/>
        </section>
     );
}
 
export default Productdetail;