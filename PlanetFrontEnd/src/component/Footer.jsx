import { Container, Row, Col } from "react-bootstrap";
import {IoLogoLinkedin,} from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import {FaFacebookSquare,FaInstagramSquare,} from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import PlanetLogo from "./assets/PlanetLogo";

const Footer = () => {
  return (
    <footer
       style={{ background: "#f7debc", paddingTop: 40, paddingBottom: 20 }}
    >
      <Container  fluid>
        <Row   className="gy-4">
          <Col xs={12} md={6} lg={3} className="text-center text-md-start">
            <div className="mbl-sllgo">
              <div style={{ marginBottom: 15, marginLeft: 20 }}>
                <PlanetLogo />
              </div>
              <div style={{ marginLeft: 50 }}>
                <Link
                  to="https://www.instagram.com/planet_clothing_official?utm_source=qr&igsh=MWg5M2ZwbzVsY2JkNw=="
                  className="me-3"
                >
                  {/* <IoLogoInstagram size={25} /> */}
                  <FaInstagramSquare color="#E1306C" size={25} />
                </Link>
                <Link
                  to="https://www.facebook.com/share/qAVhM9x5rXY5YQUf/?mibextid=qi2Omg"
                  className="me-3"
                >
                  {/* <FaFacebookF size={25} /> */}
                  <FaFacebookSquare size={25} />
                </Link>
                <a href="" className="me-3">
                  {/* <FaLinkedin size={30} /> */}
                  <IoLogoLinkedin size={30} />
                </a>
                <a href="https://wa.me/+917865939895" className="me-3">
                  <IoLogoWhatsapp size={25} color="#20C941" />
                </a>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    marginTop: 10,
                    marginLeft: -20,
                  }}
                >
                  <LuPhone size={25} className="me-2" />
                  <a href="tel:+917865939895">+91-7865939895</a>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center text-md-start">
            <h6 style={{ color: "#888888", fontSize: 16 }}>Help & Info</h6>
            <div>
              <LinkContainer to="/trackOrder">
                <Nav.Link>TRACK ORDER</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/returnexchangerequest">
                <Nav.Link>PLACE RETURN / EXCHANGE REQUEST</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/returnsexchangepolicy">
                <Nav.Link>RETURNS / EXCHANGE POLICY</Nav.Link>
              </LinkContainer>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center text-md-start">
            <h6 style={{ color: "#888888", fontSize: 16 }}>Get To Know Us</h6>
            <div>
              <LinkContainer to="/contact-us">
                <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/faq_page">
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/refund_policy">
                <Nav.Link>REFUND POLICY</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/term_&_condition">
                <Nav.Link>TERM & CONDITION</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/privacy_policy">
                <Nav.Link>PRIVACY POLICY</Nav.Link>
              </LinkContainer>
            </div>
          </Col>
          {/* <Col xs={12} md={6} lg={3} className="text-center text-md-start">
            <h6 style={{ color: "#888888", fontSize: 16 }}>Download</h6>
            <div>
              <LinkContainer to="/" style={{ marginBottom: 15 }}>
                <Nav.Link>
                  <img src="/footerImg/Apple Store.jpg" alt="Apple Store" />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>
                  <img src="/footerImg/Google play.jpg" alt="Google Play" />
                </Nav.Link>
              </LinkContainer>
            </div>
          </Col> */}
        </Row>
        {/* <Row className="mt-4 gy-3" style={{ marginLeft: 10 }}>
          <Col xs={12} md={4}>
            <FloatingLabel controlId="floatingInput" label="Email address">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                style={{ width: "100%", border: "1px solid #000000" }}
              />
            </FloatingLabel>
          </Col>
          <Col xs={12} md={4}>
            <Button
              style={{
                width: "100%",
                height: 60,
                background: "#000000",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                border: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Col>
          
        </Row> */}
      </Container>
    </footer>
  );
};

export default Footer;
