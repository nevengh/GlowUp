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

const Hero = () => {
  const { language, setLanguage } = useLanguage();
  const translations = language === "en" ? en : ar;

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
  };

  return (
    <div className="Hero">
      <video src={heroVideo} autoPlay muted loop></video>
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-heading " >
            {translations.HeroHeadLine}
          </h1>
          <h2>{translations.aboutHeading}</h2>
          <a href="#contact" className="BookGlow" >
            {translations.HeroBTN}
          </a>
        </div>
        <Navbar expand="lg" className="navbar-overlay" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Glow Up Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#home">{translations.Home}</Nav.Link>
                <Nav.Link href="#Services">{translations.Services}</Nav.Link>
                <Nav.Link href="#link">{translations.ContactUs}</Nav.Link>
              </Nav>
              <div className="left-navbar-section d-flex align-items-center justify-content-center">
                <a className="" href="#contact">
                  {translations.BookNow}
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
