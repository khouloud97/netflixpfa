import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

export function Loginscreen() {
  const [signIn, setSigIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <button onClick={() => setSigIn(true)} className="loginScreen_button">
          Sign in
        </button>
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
        />

        <div className="loginSreen_gradien"></div>
      </div>
      <div className="loginScreen_body ">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Films, séries TV et bien plus en illimité.</h1>
            <h2>Où que vous soyez. Annulez à tout moment.</h2>
            <h3>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </h3>

            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Adresse" />
                <button
                  onClick={() => setSigIn(true)}
                  className="loginScreen_gs"
                >
                  {" "}
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Loginscreen;
