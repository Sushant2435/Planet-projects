/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import OtpInput from "react18-input-otp";
// import Button from "react-bootstrap/Button";
// import { toast } from "react-toastify";
// import Modal from "react-bootstrap/Modal";
// import { useDispatch, useSelector } from "react-redux";
// import { verifyOtp } from "../features/auth/authSlice";
// import { fetchCartItems } from "../features/cart/cartSlice";

// const OtpInputForm = ({ show, setModalShow, phone, handleLogin, onHide }) => {
//   const [otp, setOtp] = useState("");
//   const [timer , setTimer]=useState(60)
//   const [attemptedVerification, setAttemptedVerification] = useState(false);

//   // console.log(phone, "phone");
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setTimer((prevCounter) => {
//   //       if (prevCounter > 0) {
//   //         return prevCounter - 1;
//   //       } else {
//   //         clearInterval(interval);

//   //         return 0;
//   //       }
//   //     });
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, [timer]);

//   const dispatch = useDispatch();
//   const { otpDetails, loading, error } = useSelector((state) => state.auth);
//   console.log(otpDetails, "otpDetails");

//   const handleChange = (enteredOtp) => {
//     setOtp(enteredOtp);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();

//     const regex = /^[0-9]{6}$/; // Regex for exactly 6 digits
//     if (regex.test(otp)) {
//       setAttemptedVerification(true);
//       dispatch(verifyOtp({ phone, details: otpDetails.details, otp }));
//     } else {
//       toast.error("Invalid OTP. Please enter a 6-digit numeric code.", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleChangeNumber = () => {
//     setOtp("");
//     onHide(); // Close the OTP form and reset to PhoneOtpForm
//   };

//   useEffect(() => {
//     if (attemptedVerification && loading === false) {
//       if (error) {
//         toast.error("Incorrect OTP. Please try again.", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//       } else {
//         toast.success(<div style={{marginLeft:"20px"}}>LOGIN SUCCESSFULL</div>, {
//           icon: <img src="public/Group.svg" style={{width:"30px", height:"30px",}}  alt="logo"/>,
//           position: "top-center",
//           autoClose: 2000,
//         });
//         dispatch(fetchCartItems());
//         handleLogin();
//         setOtp("");
//         setModalShow(false);
//       }
//       setAttemptedVerification(false);
//     }
//   }, [loading, error, handleLogin, setModalShow, attemptedVerification]);

//   return (
//     <>
//       <Modal size="md" centered show={show} onHide={onHide}>
//         <Modal.Body>
//           <h5 style={{ marginLeft: 80 }}>
//             Enter OTP Sent To: <span style={{ fontSize: 16 }}>{phone}</span>
//           </h5>
//           <Button
//             style={{
//               width: 170,
//               background: "white",
//               color: "#AB68EF",
//               fontWeight: "bold",
//               fontSize: 12,
//               border: "none",
//               marginLeft: 200,
//               marginTop: -10,
//             }}
//             onClick={handleChangeNumber}
//           >
//             CHANGE NUMBER
//           </Button>
//           <div style={{ marginLeft: 80, marginTop: 20 }}>
//             <OtpInput
//               value={otp}
//               onChange={handleChange}
//               numInputs={6}
//               separator={<span>-</span>}
//               inputStyle={{ width: 40, height: 40 }}
//             />
//           </div>
//           <p style={{ marginLeft: 80, marginTop: 10 }}>Resend otp in {timer}s</p>
//           <button
//             style={{
//               marginLeft: 80,
//               width: 280,
//               background: "#AB68EF",
//               border: "none",
//               marginTop: 10,
//               marginBottom: 30,
//               padding: 10,
//             }}
//             type="submit"
//             onClick={handleClick}
//             // disabled={loading}
//           >
//             Verify
//           </button>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default OtpInputForm;

import { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../features/auth/authSlice";
import { fetchCartItems } from "../features/cart/cartSlice";

const OtpInputForm = ({ show, setModalShow, phone, handleLogin, onHide }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [attemptedVerification, setAttemptedVerification] = useState(false);

  const dispatch = useDispatch();
  const { otpDetails, loading, error } = useSelector((state) => state.auth);

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const regex = /^[0-9]{6}$/;
    if (regex.test(otp)) {
      setAttemptedVerification(true);
      dispatch(verifyOtp({ phone, details: otpDetails.details, otp }));
    } else {
      toast.error("Invalid OTP. Please enter a 6-digit numeric code.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleChangeNumber = () => {
    setOtp("");
    onHide(); // Close the OTP form and reset to PhoneOtpForm
  };

  useEffect(() => {
    if (attemptedVerification && loading === false) {
      if (error) {
        toast.error("Incorrect OTP. Please try again.", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.success(
          <div style={{ marginLeft: "20px" }}>LOGIN SUCCESSFULL</div>,
          {
            icon: (
              <img
                src="public/Group.svg"
                style={{ width: "30px", height: "30px" }}
                alt="logo"
              />
            ),
            position: "top-center",
            autoClose: 2000,
          }
        );
        dispatch(fetchCartItems());
        handleLogin();
        setOtp("");
        setModalShow(false);
      }
      setAttemptedVerification(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, handleLogin, setModalShow, attemptedVerification]);

  return (
    <>
      <Modal size="md" centered show={show} onHide={onHide}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h5>
                  Enter OTP Sent To:{" "}
                  <span style={{ fontSize: 16 }}>{phone}</span>
                </h5>
              </div>

              <div className="col-12 text-center">
                <Button
                  variant="link"
                  className="p-0 text-decoration-none"
                  onClick={handleChangeNumber}
                  style={{
                    color: "#AB68EF",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  CHANGE NUMBER
                </Button>
              </div>

              <div className="col-12 d-flex justify-content-center my-3">
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span>-</span>}
                  inputStyle={{ width: 40, height: 40 }}
                />
              </div>

              <div className="col-12 text-center mb-2">
                <p>Resend OTP in {timer}s</p>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  className="btn btn-primary w-75"
                  style={{ backgroundColor: "#AB68EF", border: "none" }}
                  onClick={handleClick}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OtpInputForm;
