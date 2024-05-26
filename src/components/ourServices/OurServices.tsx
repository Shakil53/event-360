import { CircleCheck } from 'lucide-react';
import img1 from '../../assets/service/Rectangle 5 (1).png'
import img2 from '../../assets/service/Rectangle 5.png'
import { Button } from '../ui/button';

const OurServices = () => {
    return (
        <div className="mt-10 md:mt-20 bg-gradient-to-tl from-[#6FCF97] to-pink-300">
            <div className="bg-white bg-opacity-90 backdrop-contrast-125 backdrop-filter backdrop-blur-3xl p-4 shadow-lg">
            <h1 className="text-2xl md:text-6xl font-bold text-center mt-10">Our Services</h1>
                <p className="text-center mt-4">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                
                {/* card section 1--------------*/}
                
            <div className='w-full mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-center mt-6 space-y-4 md:space-y-0'>
                    
                <div className="card w-96 bg-base-100 shadow-md mt-10">
                    <figure className="px-3 pt-3">
                    <img src={img1} alt="our services" className="rounded-md" />
                </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl font-bold text-start ml-4 mt-3">Organization event</h2>
                                <div className='py-4'>
                                    <div className='flex gap-4 ml-4 mt-4'>
                                    <span className=''><CircleCheck/></span>
                                    <p>One day pas access all lecture</p>
                                    </div>    
                                    <div className='flex gap-4 ml-4 mt-4'>
                                    <span className=''><CircleCheck/></span>
                                    <p>Lunch and Snack</p>
                                    </div>    
                                    <div className='flex gap-4 ml-4 mt-4'>
                                    <span className=''><CircleCheck/></span>
                                    <p>Meet Event Speaker</p>
                                    </div>    
                                    <div className='flex gap-4 ml-4 mt-4'>
                                    <span className=''><CircleCheck/></span>
                                    <p>Front Seat</p>
                                    </div>    
                                    <div className='flex gap-4 ml-4 mt-4'>
                                    <span className=''><CircleCheck/></span>
                                    <p>One day pas access all lecture</p>
                                    </div>    
                                </div>

                    
                            {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
                
        </div>
                        </div>    
                        {/* card section 2--------------*/}
                        
                    <div className="card w-96 bg-base-100 shadow-md mt-10">
                <figure className="px-3 pt-3">
                <img src={img2} alt="our services" className="rounded-md" />
            </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-3xl font-bold text-start ml-4 mt-3">Organization event</h2>
                            <div className='py-4'>
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>One day pas access all lecture</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>Lunch and Snack</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>Meet Event Speaker</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>Front Seat</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>One day pas access all lecture</p>
                                </div>    
                            </div>

                
                        {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
            
    </div>
                    </div>    
                
                    {/* card section 3--------------*/}
                    
                    <div className="card w-96 bg-base-100 shadow-md mt-10">
                <div className="card-body items-center text-center">
                                <h2 className="text-3xl font-bold text-start ml-4 mt-3">Wedding Event</h2>
                                
                                <p className='text-left p-5'>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.</p>
                            
                            <div className='py-4'>
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>One day pas access all lecture</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>Lunch and Snack</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>Meet Event Speaker</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>Front Seat</p>
                                </div>    
                                <div className='flex gap-4 ml-4 mt-4'>
                                <span className=''><CircleCheck/></span>
                                <p>One day pas access all lecture</p>
                                    </div>    
                                    <Button className='w-[359px] h-[52px] mt-10'>Check It Out</Button>
                            </div>

                
                        {/* <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /> */}
            
    </div>
                    </div>    
            </div>




                </div>
                

            
                
            </div>
    );
};

export default OurServices;