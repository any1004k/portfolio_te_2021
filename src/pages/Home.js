import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

const Header = () => {
  // 클릭하면 스크롤하는 제이쿼리
  // window.$(document).ready(function () {
  //   window.$(".scroll").click(function (event) {
  //     event.preventDefault();
  //     window
  //       .$("html,body")
  //       .animate({ scrollTop: window.$(this.hash).offset().top }, 50);
  //   });
  // });

  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {},
        }}
      />
      <div className="header-wrapper" id="target2">
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

          <a href="/Contacts" className="contact_button">
            개발의뢰
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
