/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";

import Login from "./Login";
import SignUpForm from "./SignUpForm";

function PhoneOtpForm({ onHide, handleLogin, ...props }) {
  const [active, setActive] = useState("login");

  return (
    <>
      <Modal
        {...props}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        // centered
        show={props.show}
        onHide={onHide}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center mb-4">
            <Button
              onClick={() => setActive("login")}
              variant={active === "login" ? "dark" : "light"}
              className="flex-fill p-3 rounded-0"
            >
              Login
            </Button>
            <Button
              onClick={() => setActive("signup")}
              variant={active === "login" ? "light" : "dark"}
              className="flex-fill p-3 rounded-0"
            >
              Sign Up
            </Button>
          </div>
          {active === "login" && <Login handleLogin={handleLogin} />}

          {active === "signup" && <SignUpForm setActive={setActive} />}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PhoneOtpForm;
