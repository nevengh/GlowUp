import { Col, Container, Row } from 'react-bootstrap';
import './ServicesPage.css';
import service1 from '../../assets/Comp1-1.jpg';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 }); // يمكنك تعديل التأخير والمدّة حسب احتياجاتك
  }, []);
  return (
    <div className="ServicesPage">
      <Container>
        <Row className="justify-content-center align-items-center">
        <Col lg={4} md={6} sm={12} data-aos="fade-up">
            <ServiceCard serviceImg={service1} serviceName="Filler" />
          </Col>
          <Col lg={4} md={6} sm={12} data-aos="fade-up" data-aos-delay="200">
            <ServiceCard serviceImg={service1} serviceName="Filler" />
          </Col>
          <Col lg={4} md={6} sm={12} data-aos="fade-up" data-aos-delay="400">
            <ServiceCard serviceImg={service1} serviceName="Filler" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;
