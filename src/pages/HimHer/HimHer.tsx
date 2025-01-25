import { Button } from 'react-bootstrap';
import './HimHer.css';
import her from "../../assets/her-img.webp";
import him from "../../assets/him-img.webp";
import {  useEffect, useState } from "react";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import Aos from "aos";
const HimHer = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
    const [selectedImage, setSelectedImage] = useState(her);
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
      }, []);
      const handleShowHer = () => {
        setSelectedImage(her);
      };
    
      const handleShowHim = () => {
        setSelectedImage(him);
      };
    
  return (
    <div className="for-him-her mt-5" data-aos="fade-up" >
    <h4 className="text-center subhead-title">{translations.youProvide}</h4>
    <h1 className="text-center head-title">{translations.AllTypeSkine}</h1>

    <div className="choice-btn d-flex align-items-center justify-content-center mt-5">
      <Button className="me-3" onClick={handleShowHim}>
        {translations.ForHim}
      </Button>
      <Button onClick={handleShowHer}>{translations.ForHer}</Button>
    </div>

    <div className="image-box mt-4">
      <img loading="lazy" src={selectedImage} alt="Selected Image" />
    </div>
  </div>
  )
}

export default HimHer