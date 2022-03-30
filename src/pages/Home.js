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
  const name = React.useCallback((event) => {
    if (event.wheelDelta >= 0) {
      var location1 = window.$("#target1").offset().top;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // alert("Scroll down");
      var location2 = window.$("#target2").offset().top;
      window.scrollTo({ top: location2, behavior: "smooth" });
    }
  });

  React.useEffect(() => {
    Aos.init({ duration: 1000 }); //이거 없으면 작동이 안되는듯?
    window.addEventListener("wheel", name);

    return () => {
      window.removeEventListener("wheel", name);
    };
  });

  return (
    <>
      <div className="header-wrapper"></div>

      <div className="main-info" id="target1">
        <Particles
          className="particles"
          params={{
            particles: {},
          }}
        />
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
        <div className="scroll-down">
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
        <div style={{ marginLeft: "10%", marginTop: "7%" }} data-aos="fade-up">
          <h4>맡은 일은 무조건 완수해내는 책임감.</h4>
          <h4>예리한 분석력.{"  "} 그리고,</h4>
          <h4>문제를 해결 할 때까지 끝까지 물고 늘어지는 질긴 근성</h4>
          <h4>이 세가지가 저의 장점입니다.</h4>
          <br />
          <h4>"나의 유일한 경쟁자는 어제의 나다. </h4>
          <h4>
            눈을 뜨면 어제 살았던 나보다 더 가슴 벅차고 열정적인 하루를 살려고
            노력한다.
          </h4>
          <h4>
            {" "}
            연습실에 들어서며 어제 한 연습보다 더 강도 높은 연습을 한 번,
            1분이라도 더 하기로 마음먹는다.
          </h4>
          <h4>어제를 넘어선 오늘을 사는 것, 이것이 내 삶의 모토다."</h4>
          <h4>- 발레리나 강수진 -</h4>
          <br />
          <h4>현재에 안주하지 않고, 나날이 발전하는 개발자가 되겠습니다.</h4>
          <h4>감사합니다.</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
