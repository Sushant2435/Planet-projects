import  { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';

const CODPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    postalCode: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the COD order logic (API call, etc.)
    setSubmitted(true);
  };

  return (
    <Container className="mt-5 p-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Cash on Delivery (COD)</h2>
          {submitted && (
            <Alert variant="success">
              Your order has been placed successfully!
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPostalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                placeholder="Enter your postal code"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Place Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CODPage;
