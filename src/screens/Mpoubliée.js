import React, { useRef } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase";
import "./SignupScreen.css";

export function Mpoubliée() {
  const emailRef = useRef(null);
  const history = useHistory();
  const forgotpas = (e) => {
    e.preventDefault();
    auth.sendPasswordResetEmail(emailRef.current.value);
  };

  return (
    <>
      <div className="signupScreen">
        <form>
          <h1> Forgot your password </h1>
          <div> Forgot your password</div>
          <div className="signupScreen_link" onClick={forgotpas}>
            {" "}
            <input ref={emailRef} type="email" placeholder="Email" />
            <button disabled={!emailRef}> Submit </button>
          </div>
        </form>
        <div></div>
      </div>
    </>
  );
}
export default Mpoubliée;
/* 
  
  // html
  
   <div> Forgot your password</div>
        <div className="signupScreen_link" onClick={forgotpas}>
          {" "}
          <input ref={emailRef} type="email" placeholder="Email" />
          <button disabled={!emailRef}> Submit </button>
        </div>
  
  
  */
