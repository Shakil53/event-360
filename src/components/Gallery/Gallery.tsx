import { CircleCheck,  } from "lucide-react";



const Gallery = () => {
    return (
        <div  className="p-4 mt-6">
            <div>
                 {/* gallery content */}
            <div className="space-y-3">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <p className="max-w-md">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
            </div>
               {/* gallery items */}
            <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-center mt-6 space-y-4 md:space-y-0">
                 
                    <div className="w-[400px] h-[648px] rounded-lg border-t-4 border-green-500 bg-white">

                       
                        <div className="p-4">
                           
                            <div className='p-4 space-y-4'>
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p>User Dashboard</p>
                                </div>    
                                <div className='flex gap-4 '>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p>Post 3 Ads per week</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p>Multiple images & videos</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p>Basic customer support</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className="">Featured ads</p>
                                </div>    
                                   
                            </div>
                        </div>
                    </div>
                   
                   
                   
                </div>
                {/* gallery image */}
                <div>

                </div>
           </div>
        </div>
    );
};

export default Gallery;