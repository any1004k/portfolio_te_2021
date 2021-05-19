import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./AboutMe.js";

const Header = () => {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {},
        }}
      />
      <div className="header-wrapper">
        <div className="main-info">
          <h1>웹,앱 풀스텍 개발자 '김태은' 입니다.</h1>
          <Typed
            className="react-typed"
            strings={["Website", "Mobile app", "Deep learning "]}
            typeSpeed={70}
            loop
          ></Typed>
          <hr />
          <hr />

          <a href="#" className="contact_button">
            개발의뢰
          </a>
        </div>
      </div>
      <AboutMe></AboutMe>
    </>
  );
};

export default Header;
