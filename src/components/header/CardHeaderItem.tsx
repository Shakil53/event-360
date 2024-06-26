import { Card, CardContent } from '../ui/card';
import { FaHeart } from "react-icons/fa6";


const CardHeaderItem = () => {
    return (

<div className='flex w-full max-w-[1280px] mx-auto mb-8 mt-4 md:-mt-16 flex-col md:flex-row items-center space-y-4 md:space-y-0 gap-2 md:gap-10'>
             <div className=''>
            <Card className="w-56 bg-opacity-50 backdrop-filter backdrop-contrast-125 backdrop-blur-sm rounded-3xl">
      
        <CardContent className='p-5 '>
                    <div className='rounded-3xl w-[48px] h-[48px] bg-[#ffb443] opacity-35 flex justify-center items-center'>
                        <div className=''>
                        <FaHeart />
                        </div>
                    </div>
       <p className='mt-8 text-gray-800 leading-relaxed'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
      </CardContent>
      
    </Card>
            </div>
            <div className=''>
            <Card className="w-56 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-3xl">
      
        <CardContent className='p-5 '>
                    <div className='rounded-3xl w-[48px] h-[48px] bg-[#6dd45f] opacity-35 flex justify-center items-center'>
                        <div className=''>
                        <FaHeart />
                        </div>
                    </div>
       <p className='mt-8 text-gray-800 leading-relaxed'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
      </CardContent>
      
    </Card>
        </div>
        <div className=''>
            <Card className="w-56 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-3xl">
      
        <CardContent className='p-5 '>
                    <div className='rounded-3xl w-[48px] h-[48px] bg-[#685FD4] opacity-35 flex justify-center items-center'>
                        <div className=''>
                        <FaHeart />
                        </div>
                    </div>
       <p className='mt-8 text-gray-800 leading-relaxed'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
      </CardContent>
      
    </Card>
        </div>
</div>
    );
};

export default CardHeaderItem;