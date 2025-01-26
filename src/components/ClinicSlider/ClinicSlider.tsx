import { useEffect, useState } from "react";
import slide1 from "../../assets/1.jpg";
import slide2 from "../../assets/2.jpg";
import slide3 from "../../assets/3.jpg";
import slide4 from "../../assets/4.jpg";
import slide5 from "../../assets/5.jpg";
import slide6 from "../../assets/6.jpg";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useLanguage } from "../../LanguageContext";
import "./ClinicSlider.css";

const ClinicSlider = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clinic-slider">
      <div className="slider-header-container">
        <h1 className="slider-header">{translations.sliderCaption}</h1>
      </div>
      <div className="slider-wrapper">
        <button onClick={prevSlide} className="slider-button left">
          &#10094;
        </button>
        <div className="slide-container">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className="clinic-slide"
            loading="lazy"
          />
        </div>
        <button onClick={nextSlide} className="slider-button right">
          &#10095;
        </button>
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ClinicSlider;
