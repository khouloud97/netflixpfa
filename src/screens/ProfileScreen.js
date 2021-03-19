import userEvent from "@testing-library/user-event";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { login, logout, selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import Nav from "../Nav";
import FooterPage from "../FooterPage";
export function Profilescreen(props) {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"></img>

          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profilescreen_plans">
              <h3>
                Plans
                <p></p>
              </h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen-logout"
              >
                Sign OUt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profilescreen;
