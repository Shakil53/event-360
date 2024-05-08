import client1 from '../../assets/client/Company logo (1).png'
import client2 from '../../assets/client/Company logo (2).png'
import client3 from '../../assets/client/Company logo (3).png'
import client4 from '../../assets/client/Company logo (4).png'
import client5 from '../../assets/client/Company logo (5).png'
import client6 from '../../assets/client/Company logo (6).png'
import client7 from '../../assets/client/Company logo (7).png'
import client8 from '../../assets/client/Company logo (8).png'
import client9 from '../../assets/client/Company logo.png'
import client10 from '../../assets/client/Company logo2.png'



const CarouselClient = () => {

  
    return (
      <div className='grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16 mt-10 mb-10 mx-52'>

        <img src={client1} alt='client we served'></img>
        <img src={client2} alt='client we served'></img>
        <img src={client3} alt='client we served'></img>
        <img src={client4} alt='client we served'></img>
        <img src={client5} alt='client we served'></img>
        <img src={client6} alt='client we served'></img>
        <img src={client7} alt='client we served'></img>
        <img src={client8} alt='client we served'></img>
        <img src={client9} alt='client we served'></img>
        <img src={client10} alt='client we served'></img>


     </div>
    );
};

export default CarouselClient;