import "./Hero.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import heroVideo from "../../assets/Sirpi+face-output.webm";
import logo from "../../assets/glowupLogo-removebg-preview.png";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";

// import { Dropdown } from "react-bootstrap";

const Hero = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  // const handleLanguageChange = (lang: "en" | "ar") => {
  //   setLanguage(lang);
  // };

  return (
    <>
      <div id="home" className="Hero">
        <video src={heroVideo} autoPlay muted loop></video>
        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-heading ">{translations.HeroHeadLine}</h1>
            <h2>{translations.aboutHeading}</h2>
            <a href="#contact" className="BookGlow">
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
                  <Nav.Link href="#home" aria-label="Link to the home section">{translations.Home}</Nav.Link>
                  <Nav.Link href="#service"  aria-label="Link to the services section">{translations.Services}</Nav.Link>
                  <Nav.Link href="#whyChooseUs"  aria-label="Link to the Why Choose Us section">
                    {translations.whychooseus}
                  </Nav.Link>
                  <Nav.Link href="#faq"  aria-label="Link to the FAQ section">{translations.Faq}</Nav.Link>
                  <Nav.Link href="#contact"  aria-label="Link to the Contact Us section">{translations.ContactUs}</Nav.Link>
                </Nav>
                <div className="left-navbar-section d-flex align-items-center justify-content-center">
                  <a className="" href="#contact"  aria-label="Button to book a service now">
                    {translations.BookNow}
                  </a>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Hero;
