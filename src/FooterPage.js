import React from "react";
import "./Footer.css";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div className="khou">
      {" "}
      <MDBFooter color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="my-4">
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="5" lg="3">
              <p>
                <i className="fa fa-home mr-3" /> Msaken 4070
              </p>
              <p>
                <i className="fa fa-envelope mr-3" />{" "}
                <a href="mailto: khouloudachour.97@gmail.com">
                  {" "}
                  khouloudachour.97@gmail.com{" "}
                </a>
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> 99779192
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3"></div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
