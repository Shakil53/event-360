import { NavLink } from 'react-router-dom';
import Container from '../Container';


const Navbar = () => {
    return (
        <Container className=''>
             <div className='flex justify-between max-w-[1280px] mx-auto mt-3'>
                <div>
                        <h1 className='text-3xl font-bold'>Event <span className='text-[#3461FF]'>360</span></h1>
                </div>
                <div className='space-x-3'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                </div>
            </div>
       </Container>
    );
};

export default Navbar;