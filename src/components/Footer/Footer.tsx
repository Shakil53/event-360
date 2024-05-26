import { Button } from "../ui/button";


const Footer = () => {
    return (
    <div className=''>
        <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <aside>
            <h1 className='text-3xl font-bold'>Event <span className='text-[#3461FF]'>360</span></h1>
            </aside> 
        <nav className="flex flex-col">
          <p className="mx-auto">Services</p> 
          <Button variant="link">Branding</Button>
          <Button variant="link">Design</Button>
          <Button variant="link">Marketing</Button>
          <Button variant="link">Advertisement</Button>
          
        </nav> 
        <nav className="flex flex-col">
          <h6 className="mx-auto">Advertisement</h6> 
          <Button variant="link">About us</Button>
          <Button variant="link">Contact</Button>
          <Button variant="link">Jobs</Button>
          <Button variant="link">Press kit</Button>
         
        </nav> 
        <nav className="flex flex-col">
        <h6 className="mx-auto">Legal</h6> 
          <Button variant="link">Terms of use</Button>
          <Button variant="link">Privacy policy</Button>
          <Button variant="link">Cookie policy</Button>
          
                </nav>
        </footer>
                
       </div>
    );
};

export default Footer;