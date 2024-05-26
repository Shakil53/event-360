import img from '../../assets/recent work/Frame 114.png'


const RecentEvent = () => {
    return (
        <div className=" bg-gradient-to-tl from-[#dc77b2] to-[#84bce4] ">
            <div className="bg-white bg-opacity-90 backdrop-contrast-125 backdrop-filter backdrop-blur-3xl p-8 shadow-lg">
                <div className=' flex flex-row-reverse justify-between items-center gap-20 p-8'>
                <div className='space-y-4'>
                    <h1 className="text-5xl font-bold">Recent Events</h1>
                    <p className='max-w-md'>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
                    </div>
                    <div>
                        <img src={img}></img>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default RecentEvent;