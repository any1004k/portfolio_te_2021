import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Link, NavLink } from "react-router-dom";

const Home = () => {
  $("nav:not(.bg-dark)").addClass("bg-dark");

  React.useEffect(() => {}, []);

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
          <div>
            <h5 style={{ textAlign: "left", color: "#e6d5b8" }}>
              반갑습니다!😘😘
            </h5>

            <h1>웹,앱 풀스텍 개발자 '김태은' 입니다.</h1>
          </div>
          <Typed
            className="react-typed"
            strings={[
              "React / React Native",
              "Javascript",
              "Node.js",
              "Express.js",
              "Java",
              "JSP",
              "Spring",
              "Tomcat",
              "C#/ Winform",
              "MSSQL,MYSQL,MariaDB",
            ]}
            typeSpeed={70}
            loop
          ></Typed>
          <hr />
          <hr />

          <p
            href="/Contacts"
            className="contact_button"
            onClick={() => alert("채용해 주셔서 감사합니다.")}
          >
            채용하기
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
