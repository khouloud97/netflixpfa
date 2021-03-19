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
          src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.15752-9/157181232_260601775599893_4404483419325055995_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=GkaDz4PZvOEAX8DA1bl&_nc_ht=scontent.ftun6-1.fna&oh=4602938bbe85881c868b1aabe191d0a4&oe=60756D24"
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
