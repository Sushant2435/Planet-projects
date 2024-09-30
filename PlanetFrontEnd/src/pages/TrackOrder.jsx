import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const TractOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div
              className="orderlogopng"
              style={{
                width: "100%", // Use 100% for responsiveness
                maxWidth: 900, // Maintain the max width for larger screens
                marginBottom: 10,
                marginTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <img
                src="/images/Track-your-order 1.jpg"
                alt="order logo png"
                style={{ height: "auto", width: "100%", maxHeight: 280 }} // Ensure responsive image scaling
              />
            </div>
          </Col>
        </Row>

        <Form style={{ marginBottom: 30 }}>
          <div className="track_form">
            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={6} style={{ width: "100%" }}>
                <Form.Control
                  style={{
                    width: "100%", // Make input width responsive
                    maxWidth: 500, // Restrict max width for larger screens
                    marginBottom: 20,
                    border: "1px solid #757171",
                    marginLeft: 20,
                  }}
                  className="mbl"
                  size="lg"
                  type="text"
                  placeholder="Order no"
                />
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={6} style={{ width: "100%" }}>
                <Form.Control
                  style={{
                    width: "100%", // Make input width responsive
                    maxWidth: 500, // Restrict max width for larger screens
                    marginBottom: 20,
                    border: "1px solid #757171",
                    marginLeft: 20,
                  }}
                  className="mbl"
                  size="lg"
                  type="text"
                  placeholder="Email/Phone no"
                />
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={6} style={{ width: "100%" }}>
                <Button
                  style={{
                    width: "100%", // Make button width responsive
                    maxWidth: 500, // Restrict max width for larger screens
                    background: "#AB68EF",
                    border: "none",
                    padding: 10,
                    marginLeft: 20,
                  }}
                  className="mbl"
                >
                  Continue
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default TractOrder;
