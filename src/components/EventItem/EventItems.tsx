import img1 from '../../assets/event/1.png'
import img2 from '../../assets/event/2.png'
import img3 from '../../assets/event/3.png'
import img4 from '../../assets/event/4.png';
import img5 from '../../assets/event/5.png';
import img6 from '../../assets/event/6.png';


const EventItems = () => {
    const images = [
        { id: 1, src: img1, alt: 'Event Item - 1' },
        { id: 2, src: img2, alt: 'Event Item - 2' },
        { id: 3, src: img3, alt: 'Event Item - 3' },
        { id: 4, src: img4, alt: 'Event Item - 4' },
        { id: 5, src: img5, alt: 'Event Item - 5' },
        { id: 6, src: img6, alt: 'Event Item - 6' },
    ];
    
   
      
    
      
    return (
        <div className='bg-gradient-to-tl from-[#6FCF97] to-pink-300'>
            <div className='bg-white bg-opacity-80 backdrop-contrast-125 backdrop-filter backdrop-blur-3xl p-4 shadow-lg'>
            <div>
        <h1 className="text-2xl md:text-6xl font-bold text-center mt-10">Event Items</h1>
            <p className="text-center mt-4 ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-gray-200/50 p-5">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={image.src} alt={image.alt} className={`w-full object-cover h-40 `} />
            <div className="p-4 text-center">
              <p className="font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
    </div>
           
            </div> 
    </div>
    );
};

export default EventItems;

              