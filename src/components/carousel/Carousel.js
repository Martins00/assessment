import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carouseldetail from "./Carouseldetail";
import axios from "axios";
import { useState, useEffect } from "react";

const Carousel = () => {
    const [banners, setBanners] = useState([])

    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 2,
    };
    
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        const getBanners = async (url) => {
            try{
                const response =  await axios.get(url);
                setBanners(response.data.banners.data);
    
            }catch(e){
                console.log(e);
            }
        }
        getBanners('https://camiestas-futbol.effectstudios.co/api/v1/banner')
    }, [])


    return( 
        <section className="mt-[4.5rem] md:mt-[7rem] min-h-[300px] overflow-hidden">
            <Slider {...settings}>
                {banners.length > 0 ? banners.map((banner, index) => <Carouseldetail key={banner.id} banner={banner} index={index}/>) : null}
            </Slider>
        </section>
    )
}

export default Carousel