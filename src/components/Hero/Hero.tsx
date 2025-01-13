import "./Hero.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import heroVideo from "../../assets/Sirpi+face-output.webm";
import logo from "../../assets/glowupLogo-removebg-preview.png";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { Dropdown } from "react-bootstrap";
import Aos from 'aos';
import { useEffect } from "react";
const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const translations = language === "en" ? en : ar;

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
  };
   useEffect(() => {
      Aos.init({ duration: 1000, delay: 200 }); // يمكنك تعديل التأخير والمدّة حسب احتياجاتك
    }, []);
  return (
    <div className="Hero">
      <video src={heroVideo} autoPlay muted loop></video>
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-heading" data-aos="fade-up">
            Glow Up Your Skin <br /> With Us
          </h1>
          <a href="#book" className="hero-btn" data-aos="fade-up" data-aos-delay="200">
            Book Now
          </a>
        </div>
        <Navbar expand="lg" className="navbar-overlay">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Glow Up Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
              <div className="left-navbar-section d-flex align-items-center justify-content-center">
                <a className="me-3" href="#">
                  Book Now
                </a>
                <Dropdown>
                  <Dropdown.Toggle variant="#CCC964" id="dropdown-basic">
                    {language === "en"
                      ? translations.English
                      : translations.Arabic}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleLanguageChange("en")}>
                      {translations.English}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLanguageChange("ar")}>
                      {translations.Arabic}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Hero;
