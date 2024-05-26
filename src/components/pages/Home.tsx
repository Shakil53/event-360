import EventItems from "../EventItem/EventItems";
import Gallery from "../Gallery/Gallery";
import CarouselClient from "../clientSection/CarouselClient";
import ClientSection from "../clientSection/ClientSection";
import OurClient from "../our client/OurClient";
import OurServices from "../ourServices/OurServices";
import Pricing from "../pricing/Pricing";


const Home = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto items-center">
            <ClientSection></ClientSection>
            <CarouselClient></CarouselClient>
            <OurServices></OurServices>
            <EventItems></EventItems>
            <Pricing></Pricing>
            <Gallery></Gallery>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;