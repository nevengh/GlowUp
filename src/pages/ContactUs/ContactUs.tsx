import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
const ContactUs = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0609464668028!2d55.36490247494584!3d25.302156327442166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c785ad1227b%3A0x4b873618560e813d!2sQamar%20Al%20Kassadi%20Advocates%20%26%20Legal%20Consultants!5e0!3m2!1sen!2s!4v1723213060571!5m2!1sen!2s"
  
  return (
    <div className="ContactUs">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
          
            <div className="formHeading">
              <h3>APPOINTMENT</h3>
              <h1>BOOK YOUR SLOT</h1>
            </div>
            <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <p className="text-form mt-5">Hello Iam !</p>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <p className="text-form mt-5">Your Email Id</p>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <p className="text-form mt-5">Enter Your Message</p>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="contact_us_map">
            <div className="map-container">
              <div
                className="elementor-element elementor-element-9e5d0bf e-con-full e-flex e-con e-child"
                data-id="9e5d0bf"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-3e5ee4b elementor-widget elementor-widget-text-editor"
                  data-id="3e5ee4b"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <iframe
                      src={map}
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
            <h1 className="Opening">Opening Hours</h1>
            <div className="Days_Open d-flex justify-content-center align-items-center">
              <div className="days ">
                <h2>Sunday</h2>
                <p>Closed</p>
              </div>
              <div className="days">
                <h2>Saturday</h2>
                <p>8:00 Am - 9:00 PM</p>
              </div>
              <div className="days">
                <h2>Monday - Friday</h2>
                <p>8:00 Am - 9:00 PM</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
