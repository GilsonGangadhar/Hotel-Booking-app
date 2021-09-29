import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    return (
        <div className="h-screen">
            <Header/>

            <main className="flex">
                <section>
                    <p className="text-xs">300+ stays for </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in mars</h1>

                    <div className="">
                        <p className="button">Cancellation flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms</p>
                        <p className="button">More filters</p>
                    </div>
                </section>
            </main>


            <Footer />
        </div>
    )
}

export default Search
