import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";

import { Col, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const ReturnExchangeRequest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container style={{ marginBottom: 30, marginTop: 80 }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          RETURN / EXCHANGE
        </h3>

        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Return/Exchange your product in just a few clicks. Please enter
              your order number and email / mobile number to continue.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
              Please read our return and{" "}
              <NavLink to="/returnsexchangepolicy">exchange policies</NavLink>
               before proceeding.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
            <Form
              className="returnexchangeform p-4"
              style={{ minWidth: "500px", maxWidth: "100%" }}
            >
              <Form.Group controlId="orderNumber" className="mb-3">
                <Form.Control
                  size="lg"
                  type="text"
                  className="custom-input"
                  placeholder="Order NO..."
                />
              </Form.Group>
              <Form.Group controlId="contactInfo" className="mb-4">
                <Form.Control
                  size="lg"
                  type="text"
                  className="custom-input"
                  placeholder="Email/phone no"
                />
              </Form.Group>
              <Button
                className="w-100 custom-input"
                style={{
                  background: "#AB68EF",
                  padding: 10,
                  border: "none",
                }}
              >
                Continue
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReturnExchangeRequest;
