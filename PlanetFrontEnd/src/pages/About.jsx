import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container style={{ marginTop: 90, marginBottom: 90 }}>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center mb-4 mb-md-0"
          >
            <div
              style={{ maxWidth: "100%", paddingLeft: 20, paddingRight: 20 }}
            >
              <img
                src="/aboutImg/unsplash_HlVjI5WmoQY (1).jpg"
                alt="about image"
                className="fade-in img-fluid"
                style={{ borderRadius: 30 }}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h3
              className="fade-in text-center text-md-left"
              style={{ fontSize: 35, color: "#AB68EF" }}
            >
              ABOUT US
            </h3>
            <p className="text-center text-md-left">
              Welcome to Planet Clothing! We're passionate about fashion,
              inclusivity, and quality. Our mission is to provide stylish,
              affordable clothing for all, while promoting sustainability and
              exceptional customer service.
            </p>
            <p className="text-center text-md-left fade-in">Our Story:-</p>
            <p className="text-center text-md-left">
              Founded on 9th December 2023, Planet Clothing was born out of a
              passion for fashion and a desire to make stylish clothing
              accessible to all. Our team of fashion enthusiasts works
              tirelessly to curate a diverse collection of clothing, shoes, and
              accessories for men and women. Join our community and stay
              stylish! Feel free to adjust as needed!! *
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Button
                style={{
                  background: "#AB68EF",
                  border: "none",
                  marginTop: 20,
                }}
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
