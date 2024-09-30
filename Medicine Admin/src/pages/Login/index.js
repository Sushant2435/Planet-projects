import Button from "../../Components/library/Button";
import { FcGoogle } from "react-icons/fc";
import { MdLockOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import "./style.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_left">
        <p className="login_heading">LOGIN</p>
        <p style={{ fontFamily: "poppins", fontSize: "14px", color: "green" }}>
          Enter your account details
        </p>
        <div className="input_container">
          <FiUser className="login_username_icon" />
          <input className="login_input" placeholder="Username" />
        </div>
        <div className="input_container">
          <MdLockOutline className="login_username_icon" />
          <input
            className="login_input"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="login_btn">Login Now</button>
        <span className="login_other">Login With Others </span>
        <button className="login_button" style={{ cursor: "pointer" }}>
          <FcGoogle className="login_icon" /> Login with Google
        </button>
      </div>
      <div className="login_right"></div>
    </div>
  );
};

export default Login;
