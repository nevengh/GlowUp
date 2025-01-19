import { Button, Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import Aos from "aos";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import emailjs from "emailjs-com"; 
const ContactUs = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4984542432926!2d55.335112576075275!3d25.253812477674646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d388b613197%3A0x678378ae0a21f061!2sglow%20up%20clinic!5e0!3m2!1sen!2sae!4v1737031828389!5m2!1sen!2sae";

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);


   // Function to send email using EmailJS
   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // تتبع الحدث عند الضغط على زر "Request a Free Consultation"
    // pushToDataLayer("buttonClick", { button: "RequestConsultation" });
    emailjs
      .sendForm(
        "service_91tapwe",
        "template_g5f8556",
        e.currentTarget,
        "7yJVuAY4MX5SUheEB"
      )
      .then((result) => {
        console.log("Email sent successfully!", result);
       
      })
      .catch((error) => {
        console.log("Failed to send email:", error);
        alert("حدث خطأ أثناء إرسال النموذج");
      });
    e.currentTarget.reset();
  };
  return (
    <div id="contact" className="conatct_Home"  >
<div className="ContactUs">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="formHeading" data-aos="fade-up">
              <h3>{translations.APPOINTMENT}</h3>
              <h1>{translations.BOOKYOURSLOT}</h1>
            </div>
            <Form data-aos="fade-up" data-aos-delay="200" onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <p className="text-form mt-5">{translations.HelloIm}</p>
                <Form.Label>{translations.name}</Form.Label>
                <Form.Control type="text" name='from_name' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <p className="text-form mt-5">{translations.YourPhoneNumber}</p>
                <Form.Label>{translations.PhoneNumber}</Form.Label>
                <Form.Control type="text" name='phone_number' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className="text-form mt-5">{translations.EmailID}</p>
                <Form.Label>{translations.Email}</Form.Label>
                <Form.Control type="email" name='user_email' />
              </Form.Group>
              <Form.Group>
                <p className="text-form mt-5 m-2">
                  {translations.SelectYourService}
                </p>
                <Form.Select aria-label="Select Service" name='user_service'>
                  <option>{translations.SelectService}</option>
                  <option value="Aesthetic">
                    {translations.AestheticTreatments}
                  </option>
                  <option value="Dental">
                    {translations.DentalCareServices}
                  </option>
                  <option value="Slimming">{translations.Slimming}</option>
                  <option value="Laser">{translations.LaserHairRemoval}</option>
                </Form.Select>
              </Form.Group>

              {/* New Date Input Field */}
              <Form.Group className="mb-3" controlId="formBasicDate">
                <p className="text-form mt-5">
                  {translations.SelectAppointment}
                </p>
                <Form.Label>{translations.Date}</Form.Label>
                <Form.Control type="date" name='user_time' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <p className="text-form mt-5">
                  {translations.EnterYourMessage}
                </p>
                <Form.Label>{translations.Message}</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" />
              </Form.Group>
               {/* Submit Button */}
               <Button className='send_btn mb-2' variant="dark" type="submit">
                {translations.Submit} {/* Add translation for submit button */}
              </Button>
            </Form>
          </Col>

          <Col lg={6} md={6} sm={12} data-aos="fade-up" data-aos-delay="200">
            <div className="contact_us_map">
              <div className="map-container">
                {/* Google Maps Embed */}
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

            {/* Opening Hours Section */}
            <h1 className="Opening">{translations.OpeningHours}</h1>
            <div className="Days_Open d-flex justify-content-center align-items-center">
              <div className="days ">
                <h2>{translations.Tuesday}</h2>
                <p>{translations.closed}</p>
              </div>
              <div className="days">
                <h2>{translations.everyDay}</h2>
                <p>{translations.Times}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    
  );
};

export default ContactUs;
