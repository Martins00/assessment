import Carousel from "../components/carousel/Carousel";
import CountryLeagues from "../components/leagues/CountryLeagues";
import Othercollection from "../components/collection/OtherCollection";
import Personalization from "../components/Personalization";
import Popular from "../components//popular/Popular";
import Reward from "../components/Reward";
import Service from "../components/Service";

const Home = () => {
    
    return ( 
        <section>
            <Carousel/>
            <Service/>
            <Reward/>
            <Popular/>
            <CountryLeagues/>
            <Othercollection/>
            <Personalization/>
        </section>
     );
}
 
export default Home;