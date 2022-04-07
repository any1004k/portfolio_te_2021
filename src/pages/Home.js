import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Link, NavLink } from "react-router-dom";
//aos(스크롤 할 때  애니매이션)
import Aos from "aos";
import "aos/dist/aos.css";
// import { gsap, ScrollTrigger } from "gsap/all";

const Home = () => {
  $("nav:not(.bg-dark)").addClass("bg-dark");

  // const name = React.useCallback((event) => {
  //   if (event.wheelDelta >= 0) {
  //     var location1 = window.$("#target1").offset().top;
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   } else {
  //     // alert("Scroll down");
  //     var location2 = window.$("#target2").offset().top;
  //     window.scrollTo({ top: location2, behavior: "smooth" });
  //   }
  // });

  React.useEffect(() => {
    Aos.init({ duration: 1000 }); //이거 없으면 작동이 안되는듯?
    // window.addEventListener("wheel", name);

    // return () => {
    //   window.removeEventListener("wheel", name);
    // };
  });

  return (
    <>
      <div className="header-wrapper"></div>
      <Particles
        className="particles"
        params={{
          particles: {},
        }}
      />
      <div className="main-info" id="target1">
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
          <div data-aos="fade-up" data-aos-delay="1000">
            <h1>웹,앱 풀스택 개발자 '김태은' 입니다.</h1>
            <hr
              style={{
                height: "2px",
                backgroundColor: "white",
                width: "80%",
                opacity: "1",
                margin: "0 auto",
              }}
            />
          </div>
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
        {/* <div className="scroll-down">
          Scroll down
          <div className="arrow"></div>
        </div>
      </div>
      <div className="main-info main-info2" id="target2">
        <Particles
          className="particles"
          params={{
            particles: {},
          }}
        />
        <div style={{ width: "100%" }}>
          <div className="scroll-up">
            Scroll up
            <div className="arrowUp"></div>
          </div>
        </div>
        <div style={{ margin: "10% 10% 5%" }} data-aos="fade-up">
          <h4>맡은 일은 무조건 완수해내는 책임감.</h4>
          <h4>예리하고 정확한 분석력.{"  "} 그리고,</h4>
          <h4>목표를 정하면 끝까지 포기하지 않는 근성</h4>
          <h4>이 세가지가 저의 장점입니다.</h4>
          <br />
          <h4>
            "일은 당신의 삶에서 큰 부분을 차지할 겁니다. 삶에서 만족을 느끼기
            위해선 당신이 위대하다고 생각하는 일을 해야 하죠. 위대한 일을 할
            방법은 당신이 하는 그 일을 사랑하는 겁니다."
          </h4>
          <br />
          <h4>
            "내가 곧 죽을 것이라는 사실은 인생에서 큰 결정을 할 때 도와주는 가장
            중요한 도구가 되었습니다. 당신이 언젠가 죽을 것이라는 사실을
            기억하는 건 우리가 아직 잃을 게 많다는 착각으로부터 벗어나는 좋은
            방법입니다."
          </h4>
          <h4>- 스티브 잡스 -</h4>
          <br />
          <h4>제가 좋아하는 스티브잡스의 명언입니다.</h4>
          <h4>
            현재에 안주하지 않고, 끊임없이 도전하고, 발전하는 개발자가
            되겠습니다.
          </h4>
          <h4>감사합니다.</h4>
        </div>*/}
      </div>
    </>
  );
};

export default Home;
