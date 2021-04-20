import React, { useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./SignupScreen.css";
import Forgotpassword from "./Forgotpassword";
import { Nav } from "react-bootstrap";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="signupScreen">
        <form>
          <h1>Sign In </h1>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} placeholder="Password" type="password" />
          <button onClick={signIn} type="submit">
            {" "}
            SigIn
          </button>
          <h4>
            <span className="signupScreen_gray"> New to Netflix ?</span>
            <span className="signupScreen_link" onClick={register}>
              Sign up Now ?
            </span>
            <br />
            <span className="signupScreen_gray"> Forgot your password ?</span>
            <Link to="/Forgotpassword">
              <span className="signupScreen_link">resend password</span>
              <br />
            </Link>{" "}
          </h4>
        </form>
        <div></div>
      </div>
    </>
  );
}
export default SignupScreen;
/* const forgotpas = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(emailRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  
  // html
  
   <div> Forgot your password</div>
        <div className="signupScreen_link" onClick={forgotpas}>
          {" "}
          <input ref={emailRef} type="email" placeholder="Email" />
          <button disabled={!emailRef}> Submit </button>
        </div>
  
  
  */
