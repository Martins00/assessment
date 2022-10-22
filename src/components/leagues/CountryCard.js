
const CountryCard = ({league}) => {
    return ( 
        <section>
            <div className='w-full'>
                <img src={league.image} className="w-full" alt="" />
            </div>
            
            <div className="card-details mt-4 text-[14px]">
                <p className="text-base font-bold">{league.title}</p>
            </div>
        </section>
     );
}
 
export default CountryCard;