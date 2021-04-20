import React, { useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Forgotpassword.css";

function Forgotpassword() {
  const emailRef = useRef(null);

  const forgotpas = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(emailRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <Link to="/">
        {" "}
        <img
          className="nav_logo"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/157181232_260601775599893_4404483419325055995_n.png?_nc_cat=102&ccb=1-3&_nc_sid=f79d6e&_nc_ohc=XrMKlKV7EwEAX-LV-Ms&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=72feb42faa0fdd193470e1be64cb72b5&oe=60A4DB67"
          alt=""
        />
      </Link>
      <div className="s">
        {" "}
        <center>
          {" "}
          <img src="https://lh3.googleusercontent.com/proxy/BxYFtdzX5KncCo5pWDG_9gHIjSfO1gbjrLg-94dM2DdVMPfP8lG6if47RhbAp0CIfh66xQmza9QTQyTnMDEeK5oA2_gFxYgcy4Gfdkow3Jy9a1Kb5LoZ2q6NNZCSu2Gf8eBAXsGHw-JkPd2qfAZNy97enmyloN4uSvI" />
        </center>{" "}
        <div className="okk">
          <center>
            {" "}
            <form>
              {" "}
              <h4>Reset password</h4>
              <div className="signupScreen_link" onClick={forgotpas}>
                {" "}
                <input ref={emailRef} type="email" placeholder="Email" />
                <button disabled={!emailRef}> Submit </button>
              </div>
            </form>{" "}
          </center>
        </div>
      </div>
    </>
  );
}
export default Forgotpassword;
