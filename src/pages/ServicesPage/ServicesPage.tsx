import { Col, Container, Row } from 'react-bootstrap';
import './ServicesPage.css';
import laser from '../../assets/graphic-customer-service.webp';
import slim from '../../assets/apple.webp';
import tooth from '../../assets/toothIcon.webp';
import service4 from '../../assets/IPL Hair Removal System_H03_2k.webp';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";


const ServicesPage = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      once: true,     // الأنيميشن يظهر مرة واحدة فقط
    });
  }, []);

  return (
   
    <div  className="services_Home mt-5">
      <h1 className="text-center">{translations.Services}</h1>
      <div className="ServicesPage mt-5">
      <Container>
        <div className="AestheticTreatments">
        
        <Row className="justify-content-center align-items-center m-auto g-3">
          
          <Col
            lg={4}
            md={6}
            sm={12}
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <ServiceCard
              serviceImg={laser}
              serviceName={translations.AestheticTreatments}
              subServices={[
                { title: translations.LaserTattoRemoval, description:translations.LaserTattoRemovalDesc },
                { title: translations.HydrafacialSessions, description:translations.HydrafacialSessionsDesc },
                { title: translations.CollagenStimulationTherapy, description:translations.CollagenStimulationDesc},
                { title:translations.PainlessPreciseHairRemoval, description:translations.PigmentationTreatmentDesc },
                { title: translations.AcneScarsTreatment, description:translations.AcneScarsTreatmentDesc},
              ]}
            />
          </Col>

      
          <Col
            lg={4}
            md={6}
            sm={12}
            data-aos="fade-up"
            data-aos-delay="200" 
          >
            <ServiceCard
              serviceImg={slim}
              serviceName={translations.Slimming}
              subServices={[
                { title: translations.TargatedAreaSliming, description: translations.TargatedAreaSlimingDesc },
                { title: translations.FullBodyFatReduction, description:translations.FullBodyFatReductionDesc },
                
              ]}
            />
          </Col>

       
          <Col
            lg={4}
            md={6}
            sm={12}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ServiceCard
              serviceImg={tooth}
              serviceName={translations.DentalCareServices}
              subServices={[
                { title: translations.Veneers, description: translations.VeneersDesc },
                { title: translations.HollywoodSmile, description:translations.HollywoodSmileDesc },
                { title: translations.ProfessionalTeethWhitening, description: translations.ProfessionalTeethWhiteningDesc },
                { title: translations.DeepTeethCleaning, description: translations.DeepTeethCleaningDesc },
              ]}
            />
          </Col>


          <Col
            lg={4}
            md={6}
            sm={12}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <ServiceCard
              serviceImg={service4}
              serviceName={translations.LaserHairRemoval}
              subServices={[
                { title: translations.LaserHairRemoval, description: translations.LaserHairRemovalDEsc },
              ]}
            />
          </Col>
      
        </Row>
        <a href="#contact" className='BookYourGlow'>{translations.bookyourGlow}</a>
        </div>
        
      </Container>
    </div>
    </div>    
  );
};

export default ServicesPage;
