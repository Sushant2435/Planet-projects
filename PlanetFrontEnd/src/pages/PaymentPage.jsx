import paytmLogo from "/public/images/paytm.webp";
import phonepay_logo from "/public/images/PhonePe_logo.png";
import googlepay from "/public/images/google_pay.png";
import { BsBank } from "react-icons/bs";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";

const PaymentPage = () => {
  const [counter, setCounter] = useState(300);
  const { cartItems } = useSelector((state) => state.cart);
  const { buynow } = useSelector((state) => state.buynow);

  const paymentDetails = useSelector((state) => state.createOrder, shallowEqual);


  const navigate = useNavigate();
  
  // Log payment details only when they change
  useEffect(() => {
    console.log(paymentDetails, "payment details");
  }, [paymentDetails]);


  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          navigate("/address");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  // Memoize the `totalPrice` to avoid unnecessary recalculations
  const totalPrice = useMemo(() => {
    return (
      buynow[0]?.orderSummary?.totalPrice ||
      cartItems?.orderSummary?.totalPrice ||
      0
    );
  }, [buynow, cartItems]);

  // Memoize `formatTime` to avoid recreating the function on every render
  const formatTime = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  return (
    <Container className="text-center mt-4 p-5">
      <Row className="justify-content-center mt-2">
        <Col>
          <h4>Amount Payable</h4>
          ₹{totalPrice}
          <p className="text-danger">{formatTime(counter)}</p>
          <p>Use Mobile Scan code to pay</p>
          {/* <img
            src={QRcode}
            alt="QR Code"
            className="img-fluid"
            style={{ height: "10rem", width: "10rem" }}
          /> */}
          <img src={paymentDetails?.paymentDetails?.qrCode}   style={{ height: "10rem", width: "10rem" }}/>
        </Col>
        <label htmlFor="UTR" className="mt-2">
          Enter UTR No/Ref No
        </label>
        <input
          id="UTR"
          type="number"
          className="p-2 mt-2 bg-info bg-opacity-10 border-info border-start-1 rounded-start rounded-end"
          style={{ outline: "none" }}
          placeholder="Enter UTR No/Ref No"
          maxLength={12}
        />
        <Button className="mt-4 btn btn-primary">Submit</Button>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>Choose a payment method to pay</h5>
          <div className="list-group">
            <Button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border">
              <img src={paytmLogo} alt="Paytm" height="30" />
              Paytm
              <i className="bi bi-hand-index-thumb text-purple"></i>
            </Button>
            <Button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mt-3 border">
              <img src={phonepay_logo} alt="PhonePe" height="30" />
              PhonePe
              <i className="bi bi-hand-index-thumb text-purple"></i>
            </Button>
            <Button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mt-3 border">
              <img src={googlepay} alt="GooglePay" height="30" />
              GooglePay
              <i className="bi bi-hand-index-thumb text-purple"></i>
            </Button>
            <Button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center mt-3 border">
              <BsBank size={25} />
              Other
              <i className="bi bi-hand-index-thumb text-purple"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
