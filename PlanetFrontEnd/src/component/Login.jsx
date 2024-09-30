/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaKey, FaUserPlus } from "react-icons/fa";
import { login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  // Yup schema for validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password must be less than 50 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await LoginSchema.validate(formData, { abortEarly: false });

      // Clear previous errors
      setFormErrors({});

      const data = await dispatch(login(formData));
      if (data.meta.requestStatus === "fulfilled") {
        handleLogin();
        navigate("/");
        toast.success(
          <div style={{ marginLeft: "20px" }}>Login Successfully</div>,
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
      } else {
        toast.error(data.payload.message);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <FaUserPlus />
          </InputGroup.Text>
          <Form.Control
            placeholder="Email"
            name="email"
            type="email"
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

        <Button
          variant="dark"
          type="submit"
          className="w-100"
          style={{ padding: "10px" }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
