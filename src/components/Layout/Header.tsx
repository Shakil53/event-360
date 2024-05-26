import CardHeaderItem from '../header/CardHeaderItem';
import ContentHeader from '../header/ContentHeader';
import Navbar from '../header/Navbar';

const Header = () => {
    return (
        <div className='bg-gradient-to-tl from-green-500 to-indigo-500'>
            <div className='bg-white bg-opacity-50 backdrop-filter backdrop-contrast-125 backdrop-blur-lg p-4 shadow-lg'>
                <Navbar></Navbar>
                <ContentHeader></ContentHeader>
                <CardHeaderItem></CardHeaderItem>
                
            </div>
                
        </div>
    );
};

export default Header;