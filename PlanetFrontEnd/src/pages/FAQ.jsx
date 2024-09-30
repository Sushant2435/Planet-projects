import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";


const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container className="p-5">
        <div className="d-flex bag" style={{ marginLeft: 500, marginTop: 90 }}>
          {/* <span></span> */}
          <h5
            style={{
              fontSize: 29,
              fontWeight: "bold",
              marginLeft: 15,
              top: 10,
              color: "#AB68EF",
            }}
          >
            FAQ
          </h5>
        </div>
        <Row className="mt-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Can I track my order?</Accordion.Header>
              <Accordion.Body>
                Absolutely! Once your order has been shipped, you will receive a
                confirmation email with a tracking number. You can use this
                number to track your package online.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                2. What is your return policy?
              </Accordion.Header>
              <Accordion.Body>
                We offer a 7-10 days return policy for items in their original
                condition. Please visit our Returns & Exchanges page for
                detailed instructions on how to return or exchange an item.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                3. How can I contact customer service?
              </Accordion.Header>
              <Accordion.Body>
                You can reach our customer service team via email at
                support@planetclothing.com or through our contact form on the
                website. We strive to respond to all inquiries within 24 hours.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                4. Can I cancel or modify my order?
              </Accordion.Header>
              <Accordion.Body>
                Once an order is placed, it is processed quickly, so changes or
                cancellations may not be possible. If you need to make a change,
                please contact us as soon as possible, and we will do our best
                to accommodate your request.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </>
  );
};

export default FAQ;
