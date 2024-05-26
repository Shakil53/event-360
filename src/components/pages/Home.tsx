import EventItems from "../EventItem/EventItems";
import CarouselClient from "../clientSection/CarouselClient";
import ClientSection from "../clientSection/ClientSection";
import OurServices from "../ourServices/OurServices";


const Home = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto items-center">
            <ClientSection></ClientSection>
            <CarouselClient></CarouselClient>
            <OurServices></OurServices>
            <EventItems></EventItems>
        </div>
    );
};

export default Home;