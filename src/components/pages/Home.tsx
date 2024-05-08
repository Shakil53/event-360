import CarouselClient from "../clientSection/CarouselClient";
import ClientSection from "../clientSection/ClientSection";


const Home = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto items-center">
            <ClientSection></ClientSection>
           <CarouselClient></CarouselClient>
        </div>
    );
};

export default Home;