import { Button } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import './Home.css';
import her from '../../assets/her-img.jpg';
import him from '../../assets/him-img.jpg';
import { useState } from 'react';
import ContactUs from '../ContactUs/ContactUs';
import ServicesPage from '../ServicesPage/ServicesPage';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(her);  // HER image as default

  const handleShowHer = () => {
    setSelectedImage(her);
  };

  const handleShowHim = () => {
    setSelectedImage(him);
  };

  return (
    <div className='Home'>
      <Hero />
      {/* service */}
      <div className="services_Home mt-5">
        <h1 className='text-center'>Our Services</h1>
        <ServicesPage/>
      </div>
      {/* For Him/Her */}
      <div className="for-him-her mt-5">
        <h4 className="text-center subhead-title">We Provide for You</h4>
        <h1 className='text-center head-title'>We Treat All Types of Skin</h1>
        
        <div className="choice-btn d-flex align-items-center justify-content-center mt-5">
          <Button className='me-3' onClick={handleShowHim}>For HIM</Button>
          <Button onClick={handleShowHer}>For HER</Button>
        </div>
        
        <div className="image-box mt-4">
          <img src={selectedImage} alt="Selected" />
        </div>
      </div>

      {/* Contact US */}
      <div className="conatct_Home">
        <ContactUs/>
      </div>

      
    </div>
  );
}

export default Home;
