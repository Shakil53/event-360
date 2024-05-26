import EventItems from "../EventItem/EventItems";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import CarouselClient from "../clientSection/CarouselClient";
import ClientSection from "../clientSection/ClientSection";
import OurClient from "../our client/OurClient";
import OurServices from "../ourServices/OurServices";
import Pricing from "../pricing/Pricing";
import RecentEvent from "../recent event/RecentEvent";


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
            <RecentEvent></RecentEvent>
            <Footer></Footer>
        </div>
    );
};

export default Home;