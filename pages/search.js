import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({searchResults}) {

    console.log(searchResults)

    const router = useRouter()
    const {location, startDate, endDate, noOfGuests} = router.query
    let range = '';

    if(startDate !== undefined && endDate !== undefined) {
        const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
        const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
        range = `${formattedStartDate} - ${formattedEndDate}`
    }


    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guest/guests`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">{`300+ Stays,  from ${range} : ${noOfGuests} guests `}</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    {/* <div className="hidden lg:inline-flex mb-5 space-x-5 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms</p>
                        <p className="button">More filters</p>
                    </div> */}

                    <div>
                    {searchResults.map((item,i) => (
                        <InfoCard 
                            key={i}
                            img={item.img}
                            location={item.location}
                            title={item.title}
                            description={item.description}
                            star={item.star}
                            price={item.price}
                            total={item.total}
                        />
                    ))}
                    </div>
                </section>
                
                {/* Map */}
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>

            </main>


            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps () {
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res => res.json())

    return {
        props : {
            searchResults
        }
    }
}
