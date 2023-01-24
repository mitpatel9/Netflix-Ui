import { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setuser]=useState(null);
  const userdata={email,password}
  const loginuser= async()=>{
      try {
        await axios.post("http://localhost:8000/api/auth/login", userdata)
        .then((res) => res.json())
        .then((data) => setuser(data));    
      } catch (err) {
        console.log(err);
      }
  }

  const handellogin = async (e) => {
    e.preventDefault();
    loginuser();
  };
  useEffect(()=>{
    localStorage.setItem("user",user)
  },[user])

  
  return (
    <div className="login">
      <div className="logincontainer">
        <form className="loginform">
          <h1 className="logintitle">Log In</h1>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Register Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your  Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitbtn" onAuxClick={handellogin}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
