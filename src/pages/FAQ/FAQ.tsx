import "./FAQ.css";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";

const FAQ = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      once: true, // الأنيميشن يعمل مرة واحدة فقط
    });
  }, []);

  const Question = [
    {
      question: translations.Question1,
      asnwer: translations.Answer1,
    },
    {
      question: translations.Question2,
      asnwer: translations.Answer2,
    },
    {
      question: translations.Question3,
      asnwer: translations.Answer3,
    },
    {
      question: translations.Question4,
      asnwer: translations.Answer4,
    },
    {
      question: translations.Question5,
      asnwer: translations.Answer5,
    },
    {
      question: translations.Question6,
      asnwer: translations.Answer6,
    },
    {
      question: translations.Question7,
      asnwer: translations.Answer7,
    },
    {
      question: translations.Question8,
      asnwer: translations.Answer8,
    },
    {
      question: translations.Question9,
      asnwer: translations.Answer9,
    },
    {
      question: translations.Question10,
      asnwer: translations.Answer10,
    },
    {
      question: translations.Question11,
      asnwer: translations.Answer11,
    },
    {
      question: translations.Question12,
      asnwer: translations.Answer12,
    },
    {
      question: translations.Question13,
      asnwer: translations.Answer13,
    },
  ];

  return (
    <>
      
      <div id="faq" className="FAQ mb-5 mt-2">
        <h1 className="FAq_Heading text-center mb-2" data-aos="fade-up">
          FAQ
        </h1>
        <Container>
          <Row className="g-3 m-auto">
            {Question.map((item, index) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200} // تأخير بين العناصر
              >
                <Card>
                  <Accordion defaultActiveKey={"0"} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.asnwer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
