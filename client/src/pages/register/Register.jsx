import { useRef, useState } from "react";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const handelStart = () => {
    setEmail(emailRef.current.value);
  };
  const handelFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="registerlogo"
          />
          <button className="loginbutton">Sign In</button>
        </div>
      </div>
      <div className="registercontainer">
        <h1 className="registerh1">Unlimited Movies, Tv Shows, And more.</h1>
        <h2 className="registerh2">Watch Anymore. Cancel Anytime</h2>
        <p className="registerp">
          Ready to watch? Enter your Email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="Enter Your Email"
              ref={emailRef}
              className="registerinput"
            />
            <button className="registerbtn" onClick={handelStart}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <form>
              <input
                type="password"
                placeholder="Enter Your Passwor"
                ref={passwordRef}
                className="registerinput"
              />
              <button className="registerbtn" onClick={handelFinish}>
                Start Membership
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
