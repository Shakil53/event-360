import icon1 from "../../assets/icon/Icons (1).png";
import icon2 from "../../assets/icon/Icons (2).png";
import icon3 from "../../assets/icon/Icons.png";
import { Button } from "../ui/button";
import { MoveRight } from 'lucide-react';
import { CircleCheck } from 'lucide-react';

const Pricing = () => {
    return (
        <div className=" bg-gradient-to-tl from-[#dc77b2] to-[#84bce4]">
            <div className="bg-white bg-opacity-90 backdrop-contrast-125 backdrop-filter backdrop-blur-3xl p-4 shadow-lg">
            
                <div className="mt-10 md:mt-20">
                <h1 className="text-2xl md:text-6xl font-bold text-center mt-10">Explore our pricing plans</h1>
                    <p className="text-center mt-4 ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                </div>
                <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-center mt-6 space-y-4 md:space-y-0">
                    {/* card items 1 */}
                    <div className="w-[400px] h-[648px] rounded-lg border-t-4 border-green-500 bg-white">

                        <div className="flex justify-between items-center p-4">
                            <img className="w-[80px] h-[80px]" src={icon1}></img>
                            <p className="font-bold text-5xl text-pink-500 ">$21</p>
                        </div>
                        <div className="p-4 space-y-2">
                            <h1 className="font-semibold text-2xl">Standard</h1>
                            <p>Upgrade your social portfolio with a stunning profile & enhanced shots.</p>
                        </div>
                        <div className="p-4">
                            <Button variant='outline' className="gap-2  justify-center items-center text-md border-blue-500 text-blue-500">Get This Package <MoveRight /></Button>
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
                                <p className=" line-through">Featured ads</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className=" line-through">Special ads badge</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className=" line-through">Call to Action in Every Ads</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className=" line-through">Max 12 team members</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    {/* card items 2 */}
                    <div className="w-[400px] h-[648px] rounded-lg border-t-4 border-blue-500 bg-white">

                        <div className="flex justify-between items-center p-4">
                            <img className="w-[80px] h-[80px]" src={icon3}></img>
                            <p className="font-bold text-5xl text-blue-500">$46</p>
                        </div>
                        <div className="p-4 space-y-2">
                            <h1 className="font-semibold text-2xl">Premium</h1>
                            <p>Quisque auctor erat velit, quis ultrices nisi vestibulum at. Donec vitae purus lorem.</p>
                        </div>
                        <div className="p-4">
                            <Button variant='destructive' className="gap-2 justify-center items-center text-md ">Get This Package <MoveRight /></Button>
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
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className="line-through">Special ads badge</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className=" line-through">Call to Action in Every Ads</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className=" line-through">Max 12 team members</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    {/* card items 3 */}
                    <div className="w-[400px] h-[648px] rounded-lg border-t-4 border-rose-400 bg-white">

                        <div className="flex justify-between items-center p-4">
                            <img className="w-[80px] h-[80px]" src={icon2}></img>
                            <p className="font-bold text-5xl text-red-500 ">$124</p>
                        </div>
                        <div className="p-4 space-y-2">
                            <h1 className="font-semibold text-2xl">Standard</h1>
                            <p>Upgrade your social portfolio with a stunning profile & enhanced shots.</p>
                        </div>
                        <div className="p-4">
                        <Button variant='outline' className="gap-2  justify-center items-center text-md border-blue-500 text-blue-500">Get This Package <MoveRight /></Button>
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
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className="">Special ads badge</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className="">Call to Action in Every Ads</p>
                                </div>    
                                <div className='flex gap-4'>
                                <span className='bg-green-300/50 rounded-xl'><CircleCheck/></span>
                                <p className="">Max 12 team members</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;