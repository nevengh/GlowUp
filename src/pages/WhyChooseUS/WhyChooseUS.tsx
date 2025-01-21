import "./WhyChooseUS.css";
import { Col, Container, Row } from "react-bootstrap";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useEffect } from "react";
import Aos from "aos";

const WhyChooseUS = () => {
      useEffect(() => {
        Aos.init({ duration: 1000, once: true });
      }, []);
    
    const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <>
    {/* SEO Metadata */}
  
      <div id="chooseUS" className="WhyChooseUs mt-5">
        <h1 className="text-center"> {translations.whychooseus} ?</h1>
        <Container>
          <Row className="m-auto mt-5">
            <Col lg={4} md={6} sm={12} data-aos="fade-up" data-aos-delay="0">
              <div className="ExpertMedicalTeamCard">
                <h2>{translations.ExpertMedicalTeam} </h2>
                <p>{translations.ExpertMedicalTeamDesc}</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} data-aos="fade-up" data-aos-delay="200">
              <div className="ExpertMedicalTeamCard">
                <h2> {translations.ModernUniqueTechnology} </h2>
                <p>{translations.ModernUniqueTechnologyDesc}</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} data-aos="fade-up" data-aos-delay="400">
              <div className="ExpertMedicalTeamCard">
                <h2> {translations.ExceptionalResults} </h2>
                <p>{translations.ExceptionalResultsDesc}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyChooseUS;
