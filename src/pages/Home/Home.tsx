import {  Button,Col,Container, Row} from "react-bootstrap";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import her from "../../assets/her-img.jpg";
import him from "../../assets/him-img.jpg";
import {  useEffect, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import ServicesPage from "../ServicesPage/ServicesPage";

import FAQ from "../FAQ/FAQ";
import Aos from "aos";

import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";

const Home = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  const [selectedImage, setSelectedImage] = useState(her); // HER image as default

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
    <div className="Home">
      <Hero />
      
      {/* service */}
      <div id="Services" className="services_Home mt-5">
        <h1 className="text-center">Our Services</h1>
        <ServicesPage />
        
      </div>
      {/* Why Choose Us? */}
      <div className="WhyChooseUs mt-5">
        <h1 className="text-center"> Why Choose Us ?</h1>
        <Container>
         <Row className="m-auto mt-5">
         <Col lg={4} md={6} sm={12} data-aos="fade-up"
            data-aos-delay="0" >
          <div className="ExpertMedicalTeamCard" >
            <h2>{translations.ExpertMedicalTeam} </h2>
            <p>{translations.ExpertMedicalTeamDesc}</p>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} data-aos="fade-up"
            data-aos-delay="200" >
          <div className="ExpertMedicalTeamCard">
            <h2> {translations.ModernUniqueTechnology} </h2>
            <p>{translations.ModernUniqueTechnologyDesc}</p>
          </div>
          </Col>
          <Col lg={4} md={6} sm={12} data-aos="fade-up"
            data-aos-delay="400">
          <div className="ExpertMedicalTeamCard">
            <h2> {translations.ExceptionalResults} </h2>
            <p>{translations.ExceptionalResultsDesc}</p>
          </div>
          </Col>
         </Row>
          
          
        </Container>
      </div>
      
      {/* For Him/Her */}
      <div className="for-him-her mt-5" data-aos="fade-up" >
        <h4 className="text-center subhead-title">We Provide for You</h4>
        <h1 className="text-center head-title">We Treat All Types of Skin</h1>

        <div className="choice-btn d-flex align-items-center justify-content-center mt-5">
          <Button className="me-3" onClick={handleShowHim}>
            For HIM
          </Button>
          <Button onClick={handleShowHer}>For HER</Button>
        </div>

        <div className="image-box mt-4">
          <img src={selectedImage} alt="Selected" />
        </div>
      </div>
      {/* FAQ */}
      <FAQ/>
      {/* Contact US */}
      <div id="contact" className="conatct_Home"  >
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;