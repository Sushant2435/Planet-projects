import { Col, Container, Row, Button } from "react-bootstrap";
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userData = new FormData();

  userData.append("name", name);
  userData.append("mobile", mobile);
  userData.append("email", email);
  userData.append("message", message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !mobile || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await axiosInstance.post("contact", userData);
      if (response) {
        toast.success("We will contact you soon", {
          position: "top-center",
        });
        console.log("response sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setMobile("");
      } else {
        console.log("data not sent");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <Container style={{ marginBottom: 90 }}>
      <h2
        className="text-center love fade-in"
        style={{ marginTop: 80, color: "#AB68EF" }}
      >
        Contact Us
      </h2>
      <Row style={{ marginTop: 30 }}>
        <Col xs={12} md={6}>
          <div className="contact-us">
            <h3 style={{ marginBottom: 20 }}>TALK WITH US</h3>
            <p style={{ textAlign: "justify", marginTop: -15 }}>
              <span style={{ marginRight: 20 }}>
                <TfiLocationPin size={25} />
              </span>
              T-4 A-88 Sector 4 Noida
              <br />
              <span style={{ marginLeft: 48 }}>Uttar Pradesh - 201301 IN</span>
            </p>
            <p>
              <span style={{ marginRight: 20 }}>
                <TfiEmail size={25} />
              </span>
              <a href="mailto:Planet.clothingsales@gmail.com">
                Planet.clothingsales@gmail.com
              </a>
            </p>
            <p>
              <span style={{ marginRight: 20 }}>
                <LuPhone size={25} />
              </span>
              <a href="tel:7865939895">+91-7865939895</a>,
              <a href="tel:1204851109">+91-1204851109</a>
            </p>
          </div>
          <div className="social-links">
            <Link to="https://www.instagram.com/planet_clothing_official?utm_source=qr&igsh=MWg5M2ZwbzVsY2JkNw==">
              <FaInstagramSquare color="#E1306C" size={25} />
            </Link>
            <Link
              to="https://www.facebook.com/share/qAVhM9x5rXY5YQUf/?mibextid=qi2Omg"
              style={{ marginLeft: 20 }}
            >
              <FaFacebookSquare size={25} />
            </Link>
            <a href="#" style={{ marginLeft: 20 }}>
              <FaLinkedin size={25} />
            </a>
            <a style={{ marginLeft: 20 }} href="https://wa.me/7865939895">
              <IoLogoWhatsapp size={25} color="#20C941" />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="mobfrm">
          <h3 className="text-center contact1" style={{ marginBottom: 20 }}>
            CONTACT DETAILS
          </h3>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
            style={{ marginLeft: 40 }}
          >
            <Form.Control
              type="text"
              style={{ border: "2px solid #AB68EF", width: "100%" }}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Mobile No"
            className="mb-3"
            style={{ marginLeft: 40 }}
          >
            <Form.Control
              type="tel"
              maxLength={10}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              style={{ border: "2px solid #AB68EF", width: "100%" }}
              placeholder="Mobile No"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            style={{ marginLeft: 40 }}
          >
            <Form.Control
              type="email"
              style={{ border: "2px solid #AB68EF", width: "100%" }}
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comments"
            style={{ marginLeft: 40 }}
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{
                height: "120px",
                border: "2px solid #AB68EF",
                width: "100%",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FloatingLabel>
          <Button
            style={{
              width: 510,
              marginTop: 20,
              marginLeft: 40,
              background: "#AB68EF",
              border: "none",
              padding: 10,
            }}
            className="ctbtn"
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
