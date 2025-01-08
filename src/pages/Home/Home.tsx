import { Button } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import './Home.css';
import her from '../../assets/her-img.jpg';
import him from '../../assets/him-img.jpg';
import { useState } from 'react';

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

      {/* For Him/Her */}
      <div className="for-him-her">
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
    </div>
  );
}

export default Home;
