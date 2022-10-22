import CountryCard from "./CountryCard";
import axios from "axios";
import { useEffect, useState } from "react";

const CountryLeagues = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(()=>{
        const getLeagues = async (url) => {
            try{
                const response =  await axios.get(url);
                console.log(response.data);
                setLeagues(response.data.categories.data[3].sub_categories);
    
            }catch(e){
                console.log(e);
            }
        }
        getLeagues('https://camiestas-futbol.effectstudios.co/api/v1/product-category')
    }, [])
    return ( 
        <section className="container mx-auto mb-20 px-4">
            <h2 className="font-bold text-2xl md:text-[30px] uppercase mb-10">Country Leagues</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5 ">
                {leagues?.length > 0 ? leagues.map((league) => (<CountryCard key={league.id} league={league} />)) : null }
                
            </div>
        </section>
     );
}
 
export default CountryLeagues;