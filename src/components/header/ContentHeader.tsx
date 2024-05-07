import { Button } from "@/components/ui/button";
import sideImg from "../../assets/sideimage.png";

const ContentHeader = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-center mt-6 space-y-4 md:space-y-0">
            {/* hearder content section */} 
            <div className="space-y-2">
                <h1 className="text-2xl md:text-6xl font-extrabold bg-gradient-to-tr from-red-500 to-lime-500 bg-clip-text">BRAND NEW <br/>EVENR PACKAGES</h1>
                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-relaxed">For Winter</h3>
                <div>
                <p className="hidden md:inline-block text-gray-800 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.Faucibus nec gravida ipsum pulvinar vel non.</p>
                </div>
                <Button className="w-48 bg-[#3461FF]" variant="destructive">Explore</Button>
            </div>
            {/* Side image section */}
            <div className="md:w-[595px] w-56">
                    <img src={sideImg}></img>
            </div>
        </div>
    );
};

export default ContentHeader;

// text-gradient-to-r from-[#5A01CB] to-[#FE8900]

// className="max-w-[576px]"

//  className="w-[595px] h-[754px]"