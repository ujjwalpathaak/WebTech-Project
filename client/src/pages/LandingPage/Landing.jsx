import React from "react";
import "./Landing.css";
import JuitLOGO from "../../assets/Logo.png";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("reached");
    navigate(`/studentLogin`);
  };
  return (
    <>
      <div className="LandingContainer">
        <div className="HeaderLanding">
          <div className="LandingLogo">
            <img id="LandingLogo" src={JuitLOGO} />
          </div>
          <div className="LandingHeaderTexts">
            <div className="PPHeadingLanding">
              <b> Online Dispensary System</b>
            </div>
            <div className="JUITHeadingLanding">
              Jaypee University Of Information Technology , Solan.
            </div>
          </div>
          <div className="LoginPageButtonLanding">
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
        <Slideshow />

        <div className="AboutUsSection">
          <div className="AboutUsLeft">
            <div className="AboutUsLeftHeading HeadingLanding">
              <b>About Us</b>
            </div>
            <div className="AboutUsLeftContent LandingDownContent">
              The JUIT was conceived by a joint vision of the Govt of Himachal
              Pradesh and the Founder Chairman of Jaypee Group Shri JaiPrakash
              Gaur in 2000. Land was provided on lease by the State Govt and the
              university was established by Act No 14 of 2002 vide Extraordinary
              Gazette Notification of the Govt of Himachal Pradesh dated May 23,
              2002. The University Grants Commission accorded its approval under
              Section 2(f) of the UGC Act vide their Letter No. F
              9-10/2002(CPP-1) dated 09 Dec 2002. The JUIT is also a member of
              the Association of Indian Universities (AIU).
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
