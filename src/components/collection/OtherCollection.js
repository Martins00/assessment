import Collectionitem from "./Collectionitem";
import kids from "../../assets/images/other-collections/kids.jpg"
import largeSizes from "../../assets/images/other-collections/large-sizes.jpg"
import keeper from "../../assets/images/other-collections/goalkeeper.jpg"
import proPlayer from "../../assets/images/other-collections/pro-player.jpg"
import shorts from "../../assets/images/other-collections/shorts.jpg"
import socks from "../../assets/images/other-collections/socks.jpg"

const Othercollection = () => {
    const datas = [
        {
            title: 'Kids',
            image: kids
        },
        {
            title: 'Large sizes',
            image: largeSizes
        },
        {
            title: 'Goalkeeper',
            image: keeper
        },
        {
            title: 'Authentic/Pro Player',
            image: proPlayer
        },
        {
            title: 'Shorts',
            image: shorts
        },
        {
            title: 'Socks',
            image: socks
        }
    ]

    return ( 
        <section className="container mx-auto mb-20 px-4 ">
            <h2 className="font-bold text-2xl md:text-[30px] uppercase mb-10">Other Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* <Collectionitem title="Kids" image={kids}/> */}
                {datas && datas?.map((data) => (<Collectionitem key={data.title} item={data} />)) }
            </div>
        </section>
     );
}
 
export default Othercollection;