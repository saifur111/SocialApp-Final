import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";

export default function Login() {
  const {signInUsingGoogle}= useAuth();
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link className="text-decoration-none" to='/register'><h5 className="text-primary text-center ">
              Create a New Account
            </h5></Link>
            
            <button onClick={signInUsingGoogle} className="loginRegisterButton">
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
