import { Col, Container, Row } from 'react-bootstrap';
import './ServicesPage.css';
import service1 from '../../assets/close-up-hands-wearing-protective-gloves.jpg';
import service2 from '../../assets/view-tape-measure-with-apple-fruit.jpg';
import service3 from '../../assets/young-woman-wearing-medical-cap-examined-by-doctor-beauty-clinic-gloves-before-treatment.jpg';
import service4 from '../../assets/woman-white-bathrobe-sitting-medical-couch-undergoing-laser-hair-removal-with-vacuum-suction.jpg'
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import 'aos/dist/aos.css';

import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
const ServicesPage = () => {
 
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  
  return (
    <div className="ServicesPage mt-5">
      <Container>
        <Row className="justify-content-center align-items-center m-auto">
        <Col lg={4} md={6} sm={12}>
            <ServiceCard serviceImg={service1} serviceName={translations.DentalCareServices} serviceBackKeys={[
              translations.Veneers,
              translations.HollywoodSmile,
              translations.ProfessionalTeethWhitening,
            translations.DeepTeethCleaning
  ]}/>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <ServiceCard serviceImg={service2} serviceName={translations.Slimming} serviceBackKeys={[translations.TargatedAreaSliming,translations.FullBodyFatReduction]} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ServiceCard serviceImg={service3} serviceName={translations.AestheticTreatments} serviceBackKeys={[
              translations.LaserTattoRemoval,translations.HydrafacialSessions,translations.CollagenStimulationTherapy,translations.PigmentationTreatmentSolutions,translations.AcneScarsTreatment,
              translations.HairRestoration,translations.Fillers,translations.Botox
            ]} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <ServiceCard serviceImg={service4} serviceName={translations.LaserHairRemoval} serviceBackKeys={[translations.PainlessPreciseHairRemoval,translations.Solutions]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;
