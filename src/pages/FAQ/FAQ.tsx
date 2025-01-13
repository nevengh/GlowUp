import './FAQ.css'
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="FAQ mb-5 mt-2">
        <h1 className="FAq_Heading text-center mb-2">FAQ</h1>
        <Container>
          <Row className="g-3 m-auto">
            {[1, 2, 3, 4].map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <Card>
                  <Accordion defaultActiveKey={"0"} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Question {item}</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
  )
}

export default FAQ