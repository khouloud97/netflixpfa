import userEvent from "@testing-library/user-event";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { login, logout, selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import StripeCheckout from "react-stripe-checkout";

import Nav from "../Nav";
import { Link, useHistory } from "react-router-dom";

import PlansScreens, { Plansscreens } from "./PlansScreens";
import axios from "axios";
import { Toast } from "react-bootstrap";
export function Profilescreen() {
  const user = useSelector(selectUser);
  const history = useHistory();
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product1, product2, product3 }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      Toast("Success! Check email for details", { type: "success" });
    } else {
      Toast("Something went wrong", { type: "error" });
    }
  }
  const [product1] = React.useState({
    name: " Basic Plan 720p",
    price: 30,
    description:
      " It doesn't matter what the resolution is, if you have the basic plan, and your TV is HD minimum, then you get somewhere close to 720p for the resolution.",
  });
  const [product2] = React.useState({
    name: "standard Plan 1080p",
    price: 60,
    description:
      "The Standard streaming plan costs $13.99 per month and allows you two watch on two screens at a time in high definition (HD).",
  });

  const [product3] = React.useState({
    name: "Premium 4K + hdr",
    price: 100,
    description:
      "The Premium streaming plan costs $17.99 per month. For that, you can watch on four screens at once (ideal for a large family), and you can video programming in HD or 4K Ultra HD, if available",
  });

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile </h1>
        <div className="profileScreen_info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"></img>

          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profilescreen_plans">
              <h3>
                Plans
                <br />
                <center>
                  <table cellspacing="45px">
                    <tr>
                      {" "}
                      <th> Basic Plan 720p </th>{" "}
                      <th>
                        {" "}
                        <StripeCheckout
                          stripeKey="pk_test_51IXYi2B0HOjvAJqsP4WCDpoNPB8XNZnLO1QphB2Cv6Z6J78StZ2DiLBNIyqgUJq9h6PH9GJfzpag63NuuwOu0wu000r4Hjealo"
                          token={handleToken}
                          amount={product1.price * 100}
                          billingAddress
                          shippingAddress
                        />
                      </th>
                    </tr>
                    <tr>
                      {" "}
                      <th> standard Plan 1080p </th>{" "}
                      <th>
                        {" "}
                        <StripeCheckout
                          stripeKey="pk_test_51IXYi2B0HOjvAJqsP4WCDpoNPB8XNZnLO1QphB2Cv6Z6J78StZ2DiLBNIyqgUJq9h6PH9GJfzpag63NuuwOu0wu000r4Hjealo"
                          token={handleToken}
                          amount={product2.price * 100}
                          billingAddress
                          shippingAddress
                        />
                      </th>
                    </tr>
                    <tr>
                      {" "}
                      <th> Premium 4K + hdr</th>{" "}
                      <th
                      >
                        {" "}
                        <StripeCheckout
                        
                          stripeKey="pk_test_51IXYi2B0HOjvAJqsP4WCDpoNPB8XNZnLO1QphB2Cv6Z6J78StZ2DiLBNIyqgUJq9h6PH9GJfzpag63NuuwOu0wu000r4Hjealo"
                          token={handleToken}
                          amount={product3.price * 100}
                          billingAddress
                          shippingAddress
                        />
                      </th>
                    </tr>
                  </table>
                </center>
              </h3>
              <Link to="/">
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen-logout"
                >
                  Sign OUt
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profilescreen;
