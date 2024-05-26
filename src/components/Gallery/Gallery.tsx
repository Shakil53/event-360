import { CircleCheck,  } from "lucide-react";
import img1 from '../../assets/gallery/Picture (1).png'
import img2 from '../../assets/gallery/Picture (2).png'
import img3 from '../../assets/gallery/Picture (3).png'
import img4 from '../../assets/gallery/Picture (4).png'
import img5 from '../../assets/gallery/Picture (5).png'
import img6 from '../../assets/gallery/Picture (6).png'
import img7 from '../../assets/gallery/Picture (7).png'
import img8 from '../../assets/gallery/Picture (8).png'
import img9 from '../../assets/gallery/Picture (9).png'
import img10 from '../../assets/gallery/Picture.png'
import img11 from '../../assets/gallery/Star.png'
import Container from "../Container";



const Gallery = () => {
    const images = [
        { id: 1, src: img11, alt: 'Event Item - 1' },
        { id: 2, src: img2, alt: 'Event Item - 2' },
        { id: 3, src: img3, alt: 'Event Item - 3' },
        { id: 4, src: img4, alt: 'Event Item - 4' },
        { id: 5, src: img5, alt: 'Event Item - 5' },
        { id: 6, src: img6, alt: 'Event Item - 6' },
        { id: 7, src: img7, alt: 'Event Item - 7' },
        { id: 8, src: img8, alt: 'Event Item - 8' },
        { id: 9, src: img9, alt: 'Event Item - 9' },
        { id: 10, src: img10, alt: 'Event Item - 10' },
        { id: 11, src: img1, alt: 'Event Item - 11' },
    ];
    
    return (
        <Container className="">
             <div  className="p-4 mt-6">
            <div className="flex gap-24">
                 {/* gallery content */}
                    <div>
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
            </div>
                {/* gallery image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={photo.src} alt={`Gallery Photo ${index + 1}`} className="w-full h-full object-cover" />
            </div>
             ))}
         </div>
           </div>
        </div>
       </Container>
    );
};

export default Gallery;