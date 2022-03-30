import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Link, NavLink } from "react-router-dom";
//aos(스크롤 할 때  애니매이션)
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  $("nav:not(.bg-dark)").addClass("bg-dark");

  React.useEffect(() => {
    Aos.init({ duration: 1000 }); //이거 없으면 작동이 안되는듯?
  }, []);

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
            <h4
              data-aos="fade-up"
              style={{
                textAlign: "left",
                color: "rgba(218 ,218 ,218,1)",
              }}
            >
              반갑습니다!
            </h4>

            <h1 data-aos="fade-up" data-aos-delay="1000">
              웹,앱 풀스택 개발자 '김태은' 입니다.
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="1000">
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
          </div>
          <hr />
          <hr />

          {/* <p
            href="/Contacts"
            className="contact_button"
            onClick={() => alert("٩(ˊᗜˋ*)و  ଘ(੭ˊ꒳ ˋ)੭✧")}
          >
            채용하기
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Home;
