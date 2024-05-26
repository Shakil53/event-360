import img from '../../assets/event/Frame 1120.png'



const EventItems = () => {
   
   
      
    
      
    return (
        <div className='flex bg-gradient-to-tl from-[#6FCF97] to-pink-300'>
            <div className='bg-white bg-opacity-80 backdrop-contrast-125 backdrop-filter backdrop-blur-3xl p-4 shadow-lg'>
            <div>
        <h1 className="text-2xl md:text-6xl font-bold text-center mt-10">Event Items</h1>
            <p className="text-center mt-4 ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
    </div>
          <div className='mt-10'>
            
           <img  src={img}></img>
    </div>
            </div> 
    </div>
    );
};

export default EventItems;

              