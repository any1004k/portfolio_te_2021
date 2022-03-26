import React, { useRef, useEffect } from "react";

//3d캐로셀
import { Carousel } from "3d-react-carousal";
//작업물
//장가게(학원졸업작품)
import jang1 from "../img/portfolio/jang1.jpg";
import jang2 from "../img/portfolio/jang2.png";
import jang3 from "../img/portfolio/jang3.png";
import jang4 from "../img/portfolio/jang4.png";
import jang5 from "../img/portfolio/jang5.png";
//tpyApp
import tpyApp1 from "../img/portfolio/tpyApp1.jpg";
import tpyApp2 from "../img/portfolio/tpyApp2.jpg";
import tpyApp3 from "../img/portfolio/tpyApp3.jpg";
import tpyApp4 from "../img/portfolio/tpyApp4.jpg";
import tpyApp5 from "../img/portfolio/tpyApp5.jpg";
import tpyApp6 from "../img/portfolio/tpyApp6.jpg";
import tpyApp7 from "../img/portfolio/tpyApp7.jpg";
import tpyApp8 from "../img/portfolio/tpyApp8.jpg";
import tpyApp9 from "../img/portfolio/tpyApp9.jpg";
// import tpyApp10 from "../img/portfolio/tpyApp10.jpg";
import tpyApp11 from "../img/portfolio/tpyApp11.jpg";
import tpyApp12 from "../img/portfolio/tpyApp12.jpg";
import tpyApp13 from "../img/portfolio/tpyApp13.jpg";
import tpyApp14 from "../img/portfolio/tpyApp14.jpg";
import tpyApp15 from "../img/portfolio/tpyApp15.jpg";
import tpyApp16 from "../img/portfolio/tpyApp16.jpg";
import tpyApp17 from "../img/portfolio/tpyApp17.jpg";
import tpyApp18 from "../img/portfolio/tpyApp18.jpg";
// import tpyApp19 from "../img/portfolio/tpyApp19.jpg";
import tpyApp20 from "../img/portfolio/tpyApp20.jpg";
import tpyApp21 from "../img/portfolio/tpyApp21.jpg";
//payflow
import payflow1 from "../img/portfolio/payflow1.png";
import payflow2 from "../img/portfolio/payflow2.png";
import payflow3 from "../img/portfolio/payflow3.png";
import payflow4 from "../img/portfolio/payflow4.png";
import payflow5 from "../img/portfolio/payflow5.png";
import payflow6 from "../img/portfolio/payflow6.png";
import payflow7 from "../img/portfolio/payflow7.png";
import payflow8 from "../img/portfolio/payflow8.png";
import payflow9 from "../img/portfolio/payflow9.png";
//tpyHomepage
import tpyHomepage1 from "../img/portfolio/tpyHomepage1.png";
import tpyHomepage2 from "../img/portfolio/tpyHomepage2.png";
import tpyHomepage3 from "../img/portfolio/tpyHomepage3.png";
import tpyHomepage4 from "../img/portfolio/tpyHomepage4.png";
import tpyHomepage5 from "../img/portfolio/tpyHomepage5.png";
import tpyHomepage6 from "../img/portfolio/tpyHomepage6.png";
import tpyHomepage7 from "../img/portfolio/tpyHomepage7.png";
import tpyHomepage8 from "../img/portfolio/tpyHomepage8.png";
import tpyHomepage9 from "../img/portfolio/tpyHomepage9.png";
import tpyHomepage10 from "../img/portfolio/tpyHomepage10.png";
import tpyHomepage11 from "../img/portfolio/tpyHomepage11.png";
//MES
import work1_1 from "../img/portfolio/work1_1.png";
import work1_2 from "../img/portfolio/work1_2.png";
import work1_3 from "../img/portfolio/work1_3.png";
import work1_4 from "../img/portfolio/work1_4.png";
//내 홈페이지(사진바꿔야함)
import work2_1 from "../img/portfolio/work2_1.png";
import work2_2 from "../img/portfolio/work2_2.png";
import work2_3 from "../img/portfolio/work2_3.png";
import work2_4 from "../img/portfolio/work2_4.png";
//융합 스케줄러
import work3_1 from "../img/portfolio/work3_1.jpg";
import work3_2 from "../img/portfolio/work3_2.jpg";
import work3_3 from "../img/portfolio/work3_3.jpg";
import work3_4 from "../img/portfolio/work3_4.jpg";
import work3_5 from "../img/portfolio/work3_5.jpg";
//서진냉장고온도앱
import work4_1 from "../img/portfolio/work4_1.jpg";
import work4_2 from "../img/portfolio/work4_2.jpg";
import work4_3 from "../img/portfolio/work4_3.jpg";

//제이쿼리
import $ from "jquery";
//aos(스크롤 할 때  애니매이션)
import Aos from "aos";
import "aos/dist/aos.css";
//gsap & 스크롤매직
import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap/all";
//https://alchera.ai/ 참고해서, 3차원 사진 돌리기 + 사진은 올라가고, 글은 스스륵 바뀌기 적용하자.
// 스티키가 위에 딱 붙으면, 글자 오른쪽 위에 숫자나타나고, 불들어오게 하기. 젤 왼쪽에 홈으로가기 버튼 추가하기.

function Portfolio() {
  // 오른쪽 네비게이션 동글뱅이

  let top = useRef();
  let li8 = useRef();
  let li7 = useRef();
  let li6 = useRef();
  let li5 = useRef();
  let li4 = useRef();
  let li3 = useRef();
  let li2 = useRef();
  let li1 = useRef();

  // 케로셀에 이미지
  let slides_jang = [
    <img src={jang1} alt="1" />,
    <img src={jang2} alt="2" />,
    <img src={jang3} alt="3" />,
    <img src={jang4} alt="4" />,
    <img src={jang5} alt="5" />,
  ];

  let slides_tpyHomepage = [
    <img src={tpyHomepage1} alt="1" />,
    <img src={tpyHomepage2} alt="2" />,
    <img src={tpyHomepage3} alt="3" />,
    <img src={tpyHomepage4} alt="4" />,
    <img src={tpyHomepage5} alt="5" />,
    <img src={tpyHomepage6} alt="6" />,
    <img src={tpyHomepage7} alt="7" />,
    <img src={tpyHomepage8} alt="8" />,
    <img src={tpyHomepage9} alt="9" />,
    <img src={tpyHomepage10} alt="10" />,
    <img src={tpyHomepage11} alt="11" />,
  ];

  let slides_payflow = [
    <img src={payflow1} alt="1" />,
    <img src={payflow2} alt="2" />,
    <img src={payflow3} alt="3" />,
    <img src={payflow4} alt="4" />,
    <img src={payflow5} alt="5" />,
    <img src={payflow6} alt="6" />,
    <img src={payflow7} alt="7" />,
    <img src={payflow8} alt="8" />,
    <img src={payflow9} alt="9" />,
  ];
  let slides_tpyApp = [
    <img src={tpyApp1} alt="1" />,
    <img src={tpyApp2} alt="2" />,
    <img src={tpyApp3} alt="3" />,
    <img src={tpyApp4} alt="4" />,
    <img src={tpyApp5} alt="5" />,
    <img src={tpyApp6} alt="6" />,
    <img src={tpyApp7} alt="7" />,
    <img src={tpyApp8} alt="8" />,
    <img src={tpyApp9} alt="9" />,
    // <img src={tpyApp10} alt="10" />,
    <img src={tpyApp11} alt="11" />,
    <img src={tpyApp12} alt="12" />,
    <img src={tpyApp13} alt="13" />,
    <img src={tpyApp14} alt="14" />,
    <img src={tpyApp15} alt="15" />,
    <img src={tpyApp16} alt="16" />,
    <img src={tpyApp17} alt="17" />,
    <img src={tpyApp18} alt="18" />,
    // <img src={tpyApp19} alt="19" />,
    <img src={tpyApp20} alt="20" />,
    <img src={tpyApp21} alt="21" />,
  ];

  let slides_MES = [
    <img src={work1_1} alt="1" />,
    <img src={work1_2} alt="2" />,
    <img src={work1_3} alt="3" />,
    <img src={work1_4} alt="4" />,
  ];
  let slides_seojin = [
    <img src={work4_1} alt="1" />,
    <img src={work4_2} alt="2" />,
    <img src={work4_3} alt="3" />,
  ];
  let slides_YHscheduler = [
    <img src={work3_1} alt="1" />,
    <img src={work3_2} alt="2" />,
    <img src={work3_3} alt="3" />,
    <img src={work3_4} alt="3" />,
    <img src={work3_5} alt="3" />,
  ];
  let slides_homePage = [
    <img src={work2_1} alt="1" />,
    <img src={work2_2} alt="2" />,
    <img src={work2_3} alt="3" />,
    <img src={work2_4} alt="3" />,
  ];
  const callback = function (index) {
    console.log("callback", index);
  };

  const section = document.querySelector(".top");

  useEffect(() => {
    Aos.init({ duration: 500 }); //이거 없으면 작동이 안되는듯?

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      onEnter: () => checkVisible(),
      onEnterBack: () => checkVisible(),
      onLeave: () => checkVisible(),
      onLeaveBack: () => checkVisible(),
      onUpdate: () => checkVisible(),
    });
  }, []);

  function checkVisible() {
    // let viewportHeight = window.$(window).height(); // Viewport Height
    let scrolltop = window.$(window).scrollTop(); // Scroll Top

    let Slides_tpyApp = window.$("#Slides_tpyApp").offset().top;
    let Slides_payflow = window.$("#Slides_payflow").offset().top;
    let Slides_tpyHomepage = window.$("#Slides_tpyHomepage").offset().top;
    let Slides_homePage = window.$("#Slides_homePage").offset().top;
    let Slides_YHscheduler = window.$("#Slides_YHscheduler").offset().top;
    let Slides_seojin = window.$("#Slides_seojin").offset().top;
    let Slides_MES = window.$("#Slides_MES").offset().top;
    let Slides_jang = window.$("#Slides_jang").offset().top;

    let Slides_tpyApp_Height = window.$("#Slides_tpyApp").height();
    let Slides_payflow_Height = window.$("#Slides_payflow").height();
    let Slides_tpyHomepage_Height = window.$("#Slides_tpyHomepage").height();
    let Slides_homePage_Height = window.$("#Slides_homePage").height();
    let Slides_YHscheduler_Height = window.$("#Slides_YHscheduler").height();
    let Slides_seojin_Height = window.$("#Slides_seojin").height();
    let Slides_MES_Height = window.$("#Slides_MES").height();
    let Slides_jang_Height = window.$("#Slides_jang").height();

    if (Slides_tpyApp + Slides_tpyApp_Height > scrolltop + 300) {
      showText("li8");
    } else if (Slides_payflow + Slides_payflow_Height > scrolltop + 300) {
      showText("li7");
    } else if (
      Slides_tpyHomepage + Slides_tpyHomepage_Height >
      scrolltop + 300
    ) {
      showText("li6");
    } else if (Slides_homePage + Slides_homePage_Height > scrolltop + 300) {
      showText("li5");
    } else if (
      Slides_YHscheduler + Slides_YHscheduler_Height >
      scrolltop + 300
    ) {
      showText("li4");
    } else if (Slides_seojin + Slides_seojin_Height > scrolltop + 300) {
      showText("li3");
    }
    //
    else if (Slides_MES + Slides_MES_Height > scrolltop + 300) {
      showText("li2");
    } else if (Slides_jang + Slides_jang_Height > scrolltop + 300) {
      showText("li1");
    }
  }
  let aa = "";
  function showText(el) {
    if (el != aa) {
      aa = el;
      // alert(aa);
      switch (el) {
        case "li1":
          li1.current.className = "active";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "";
          break;
        case "li2":
          li1.current.className = "";
          li2.current.className = "active";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "";
          break;
        case "li3":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "active";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "";
          break;
        case "li4":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "active";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "";
          break;
        case "li5":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "active";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "";
          break;
        case "li6":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "active";
          li7.current.className = "";
          li8.current.className = "";
          break;
        case "li7":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "active";
          li8.current.className = "";
          break;
        case "li8":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "active";
          break;
      }
    }
  }
  return (
    <div
      className="top"
      style={{
        width: "100%",
        height: "1000vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "gray",
        paddingTop: window.innerHeight / 5,
      }}
    >
      {/* 바탕과 함께 스크롤되는 오른쪽 스크롤 창 */}
      <div
        style={{
          width: "50%",
          height: "100vh",
        }}
      >
        <div
          id="Slides_tpyApp"
          style={{
            padding: "5% 10%",
            width: "70%",
            height: "130%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "150px",
          }}
        >
          <Carousel
            slides={slides_tpyApp}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_payflow"
          style={{
            padding: "8% 0%",
            width: "100%",
            height: "55%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "200px",
          }}
        >
          <Carousel
            slides={slides_payflow}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_tpyHomepage"
          style={{
            padding: "10% 0%",
            width: "100%",
            height: "120%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "200px",
          }}
        >
          <Carousel
            slides={slides_tpyHomepage}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_homePage"
          style={{
            padding: "5% 10%",
            width: "100%",
            height: "65%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "150px",
          }}
        >
          <Carousel
            slides={slides_homePage}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_YHscheduler"
          style={{
            padding: "5% 10%",
            width: "70%",
            height: "120%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "150px",
          }}
        >
          <Carousel
            slides={slides_YHscheduler}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_seojin"
          style={{
            padding: "5% 10%",
            width: "70%",
            height: "120%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "150px",
          }}
        >
          <Carousel
            slides={slides_seojin}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_MES"
          style={{
            padding: "5% 10%",
            width: "100%",
            height: "65%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "150px",
          }}
        >
          <Carousel
            slides={slides_MES}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
        <div
          id="Slides_jang"
          style={{
            padding: "5% 10%",
            width: "100%",
            height: "130%",
            backgroundColor: "#F7F5F2",
            margin: "0 auto",
            marginBottom: "150px",
          }}
        >
          <Carousel
            slides={slides_jang}
            autoplay={false}
            arrows={true}
            onSlideChange={callback}
          />
        </div>
      </div>
      {/* 위에 떠있는 fixed 창 */}
      <div
        className="fixed"
        style={{
          width: "50%",
          height: "55vh",
          backgroundColor: "yellow",
          position: "sticky",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div className="active" ref={li8} data-aos="fade-up">
          <h2>React Native 앱(node.js)</h2>
          <div>
            <h5>기여도</h5>
            <h5>제작기간</h5>
            <h5>기능</h5>
          </div>
        </div>
        <div className="" ref={li7} data-aos="fade-up">
          <h2>.Net winforms 데스크탑앱(C#)</h2>
          <div>
            <h5>기여도</h5>
            <h5>제작기간</h5>
            <h5>기능</h5>
          </div>
        </div>
        <div className="" ref={li6} data-aos="fade-up">
          <h2>React 웹(node.js)</h2>
          <div>
            <h5>기여도</h5>
            <h5>제작기간</h5>
            <h5>기능</h5>
          </div>
        </div>
        <div className="" ref={li5}>
          <p>
            작업명 : 개인 홈페이지(단독)
            <br />
            작업일 : 2021.05
            <br />
            작업도구 : react, node.js, firebase 등
            <br />
            깃허브 :{" "}
            <a
              href="https://github.com/any1004k/portfolio_te_2021"
              target="_blank"
            >
              https://github.com/any1004k/portfolio_te_2021
            </a>
          </p>
        </div>
        <div className="" ref={li4}>
          <p>
            작업명 : 프로젝트 일정관리 앱(단독)
            <br />
            작업일 : 2021.02
            <br />
            작업도구 : android studio, java, mysql
          </p>
        </div>
        <div className="" ref={li3}>
          <p>
            작업명 : 냉장고 온도관리용 알람 앱(단독)
            <br />
            작업일 : 2021.01
            <br />
            작업도구 : android studio, java, mysql
          </p>
        </div>
        <div className="" ref={li2}>
          <p>
            작업명 : 스마트공장 관리 시스템 (참여)
            <br />
            작업일 : 2020.9~ 2020.12
            <br />
            작업도구 : vs2017, C#, devexpress, mysql 등
          </p>
        </div>
        <div className="" ref={li1}>
          li1 글
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
