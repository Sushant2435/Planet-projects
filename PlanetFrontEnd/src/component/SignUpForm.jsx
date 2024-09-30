/* eslint-disable react/prop-types */
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import tostSuccess from "/public/Group.svg";
import * as Yup from 'yup';


const SignUpForm = ({ setActive }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  // Yup schema for validation
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name is too short!")
      .max(50, "First name is too long!")
      .required("First name is required"),
    lastName: Yup.string()
      .min(2, "Last name is too short!")
      .max(50, "Last name is too long!")
      .required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be less than 50 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data with Yup
      await SignupSchema.validate(formData, { abortEarly: false });

      // Clear previous errors
      setFormErrors({});

      // Dispatch the sign-up action
      dispatch(signUp(formData));
      setActive("login");

      // Show success toast
      toast.success(
        <div style={{ marginLeft: "20px" }}>Registration Successfully</div>,
        {
          icon: (
            <img
              src={tostSuccess}
              style={{ width: "30px", height: "30px" }}
              alt="logo"
            />
          ),
          position: "top-center",
          autoClose: 2000,
        }
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // Collect validation errors and set in the state
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      } else {
        toast.error("Credential failed");
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            aria-label="Email"
            aria-describedby="basic-addon1"
            style={{ padding: "10px" }}
          />
        </InputGroup>
        {formErrors.email && (
          <div
            className="text-danger"
            style={{ marginTop: "-20px", paddingBottom: "10px" }}
          >
            {formErrors.email}
          </div>
        )}

        <Row>
          <Col xs={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <FaRegUser />
              </InputGroup.Text>
              <Form.Control
                aria-label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleOnChange}
                placeholder="First Name"
                aria-describedby="inputGroup-sizing-default"
                style={{ padding: "10px" }}
              />
            </InputGroup>
            {formErrors.firstName && (
              <div
                className="text-danger"
                style={{ marginTop: "-20px", paddingBottom: "10px" }}
              >
                {formErrors.firstName}
              </div>
            )}
          </Col>

          <Col xs={12} md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <FaRegUser />
              </InputGroup.Text>
              <Form.Control
                aria-label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleOnChange}
                placeholder="Last Name"
                aria-describedby="inputGroup-sizing-default"
                style={{ padding: "10px" }}
              />
            </InputGroup>
            {formErrors.lastName && (
              <div
                className="text-danger"
                style={{ marginTop: "-20px", paddingBottom: "10px" }}
              >
                {formErrors.lastName}
              </div>
            )}
          </Col>
        </Row>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <FaKey />
          </InputGroup.Text>
          <Form.Control
            aria-label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleOnChange}
            placeholder="Password"
            aria-describedby="inputGroup-sizing-default"
            style={{ padding: "10px" }}
          />
        </InputGroup>
        {formErrors.password && (
          <div
            className="text-danger"
            style={{ marginTop: "-20px", paddingBottom: "10px" }}
          >
            {formErrors.password}
          </div>
        )}

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <FaKey />
          </InputGroup.Text>
          <Form.Control
            aria-label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleOnChange}
            placeholder="Confirm Password"
            aria-describedby="inputGroup-sizing-default"
            style={{ padding: "10px" }}
          />
        </InputGroup>
        {formErrors.confirmPassword && (
          <div
            className="text-danger"
            style={{ marginTop: "-20px", paddingBottom: "10px" }}
          >
            {formErrors.confirmPassword}
          </div>
        )}

        {/* <Form.Group controlId="formTerms" className="mb-3">
          <Form.Check type="checkbox" label="I accept the Terms of Service and Privacy Policy" />
        </Form.Group> */}

        <Button
          variant="dark"
          type="submit"
          className="w-100"
          style={{ padding: "10px" }}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
