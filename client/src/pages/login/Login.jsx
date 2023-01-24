
import "./Login.css";

const Login = () => {
  
  return (
    <div className="login">
      <div className="top">
        <div className="wapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="registerlogo"
          />
        </div>
      </div>
      <div className="logincontainer">
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Enter Your Register Email"/>
            <input type="password" placeholder="Enter Your Password" />
            <button className="loginbtn"> Sign In</button>
            <span>New to Netflix?<b>Sing up now.</b></span>
            <small>This page is protected by google reCAPTCHA to ensure you're not a bot. <b>Learn More</b></small>
        </form>
      </div>
    </div>
  );
};

export default Login;
