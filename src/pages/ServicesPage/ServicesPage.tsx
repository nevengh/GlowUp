import { Col, Container, Row } from 'react-bootstrap';
import './ServicesPage.css';
import service1 from '../../assets/Comp1-1.jpg';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="ServicesPage">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={4} md={6} sm={12}>
            <ServiceCard serviceImg={service1} serviceName="Filler" />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ServiceCard serviceImg={service1} serviceName="Filler" />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ServiceCard serviceImg={service1} serviceName="Filler" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;
