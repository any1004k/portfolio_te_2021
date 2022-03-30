import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import myIcon from "../img/myIcon.png";

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
  $("nav:not(.bg-dark)").addClass("bg-dark");

  let li8 = useRef();
  let li7 = useRef();
  let li6 = useRef();
  let li5 = useRef();
  let li4 = useRef();
  let li3 = useRef();
  let li2 = useRef();
  let li1 = useRef();
  let n8 = useRef();
  let n7 = useRef();
  let n6 = useRef();
  let n4 = useRef();
  let n3 = useRef();
  let n5 = useRef();
  let n2 = useRef();
  let n1 = useRef();

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

  const top = document.querySelector(".top");
  // const section = [...document.querySelectorAll(".section")];

  useEffect(() => {
    Aos.init({ duration: 500 }); //이거 없으면 작동이 안되는듯?

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: top,
      start: "top top",
      onEnter: () => {
        // 스크롤 내릴때
        checkVisible();
      },
      onEnterBack: () => {
        checkVisible();
      },
      onLeave: () => {
        checkVisible();
      },
      onLeaveBack: () => {
        // 위로 올라가서 꼭대기 닿았을 때.
        checkVisible();
      },
      onUpdate: () => {
        // 스크롤 내릴때 (다른 페이지 가면, on update 되는디.)
        checkVisible();
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });

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
    } else if (Slides_payflow + Slides_payflow_Height > scrolltop + 100) {
      showText("li7");
    } else if (
      Slides_tpyHomepage + Slides_tpyHomepage_Height >
      scrolltop + 200
    ) {
      showText("li6");
    } else if (Slides_homePage + Slides_homePage_Height > scrolltop + 200) {
      showText("li5");
    } else if (
      Slides_YHscheduler + Slides_YHscheduler_Height >
      scrolltop + 200
    ) {
      showText("li4");
    } else if (Slides_seojin + Slides_seojin_Height > scrolltop + 200) {
      showText("li3");
    }
    //
    else if (Slides_MES + Slides_MES_Height > scrolltop + 200) {
      showText("li2");
    } else if (Slides_jang + Slides_jang_Height > scrolltop + 200) {
      showText("li1");
    }
  }
  let aa = "";
  function showText(el) {
    if (el != aa) {
      aa = el;
      switch (el) {
        case "li8":
          li1.current.className = "";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "active";

          n1.current.className = "";
          n2.current.className = "";
          n3.current.className = "";
          n4.current.className = "";
          n5.current.className = "";
          n6.current.className = "";
          n7.current.className = "";
          n8.current.className = "active";
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
          n1.current.className = "";
          n2.current.className = "";
          n3.current.className = "";
          n4.current.className = "";
          n5.current.className = "";
          n6.current.className = "";
          n7.current.className = "active";
          n8.current.className = "";
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
          n1.current.className = "";
          n2.current.className = "";
          n3.current.className = "";
          n4.current.className = "";
          n5.current.className = "";
          n6.current.className = "active";
          n7.current.className = "";
          n8.current.className = "";
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
          n1.current.className = "";
          n2.current.className = "";
          n3.current.className = "";
          n4.current.className = "";
          n5.current.className = "active";
          n6.current.className = "";
          n7.current.className = "";
          n8.current.className = "";
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
          n1.current.className = "";
          n2.current.className = "";
          n3.current.className = "";
          n4.current.className = "active";
          n5.current.className = "";
          n6.current.className = "";
          n7.current.className = "";
          n8.current.className = "";
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
          n1.current.className = "";
          n2.current.className = "";
          n3.current.className = "active";
          n4.current.className = "";
          n5.current.className = "";
          n6.current.className = "";
          n7.current.className = "";
          n8.current.className = "";
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
          n1.current.className = "";
          n2.current.className = "active";
          n3.current.className = "";
          n4.current.className = "";
          n5.current.className = "";
          n6.current.className = "";
          n7.current.className = "";
          n8.current.className = "";
          break;
        case "li1":
          li1.current.className = "active";
          li2.current.className = "";
          li3.current.className = "";
          li4.current.className = "";
          li5.current.className = "";
          li6.current.className = "";
          li7.current.className = "";
          li8.current.className = "";
          n1.current.className = "active";
          n2.current.className = "";
          n3.current.className = "";
          n4.current.className = "";
          n5.current.className = "";
          n6.current.className = "";
          n7.current.className = "";
          n8.current.className = "";

          break;
      }
    }
  }
  return (
    <div
      className="top"
      style={{
        width: "100%",
        height: "1030vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#212121",
      }}
    >
      {/* 왼쪽 사진 있는 창. */}
      <div
        style={{
          width: "50%",
          height: "100vh",
          marginLeft: 100,
          paddingTop: "150px",
        }}
      >
        <div
          className="section"
          id="Slides_tpyApp"
          style={{
            width: "70%",
            height: "170%",
            margin: "0px auto",
            marginBottom: "350px",
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
          className="section"
          id="Slides_payflow"
          style={{
            padding: "8% 0%",
            width: "100%",
            height: "55%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "400px",
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
          className="section"
          id="Slides_tpyHomepage"
          style={{
            padding: "10% 0%",
            width: "100%",
            height: "120%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "400px",
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
          className="section"
          id="Slides_homePage"
          style={{
            padding: "8% 0%",
            width: "100%",
            height: "55%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "400px",
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
          className="section"
          id="Slides_YHscheduler"
          style={{
            padding: "5% 10%",
            width: "70%",
            height: "80%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "400px",
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
          className="section"
          id="Slides_seojin"
          style={{
            padding: "5% 10%",
            width: "70%",
            height: "80%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "400px",
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
          className="section"
          id="Slides_MES"
          style={{
            padding: "8% 0%",
            width: "100%",
            height: "55%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "350px",
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
          className="section"
          id="Slides_jang"
          style={{
            padding: "8% 0%",
            width: "100%",
            height: "100%",
            //backgroundColor: "#F6F6F6",
            margin: "0 auto",
            marginBottom: "50px",
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
          // backgroundColor: "yellow",
          position: "sticky",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingLeft: 50,
          paddingRight: 100,
        }}
      >
        <div
          className="active"
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            paddingTop: "50px",
            justifyContent: "right",
            alignItems: "baseline",
            marginBottom: "50px",
          }}
        >
          <p className="active" ref={n8} style={{ marginRight: 10 }}>
            1
          </p>
          <p className="" ref={n7} style={{ marginRight: 10 }}>
            2
          </p>
          <p className="" ref={n6} style={{ marginRight: 10 }}>
            3
          </p>
          <p className="" ref={n5} style={{ marginRight: 10 }}>
            4
          </p>
          <p className="" ref={n4} style={{ marginRight: 10 }}>
            5
          </p>
          <p className="" ref={n3} style={{ marginRight: 10 }}>
            6
          </p>
          <p className="" ref={n2} style={{ marginRight: 10 }}>
            7
          </p>
          <p className="" ref={n1} style={{ marginRight: 10 }}>
            8
          </p>
        </div>

        <div className="active" ref={li8} data-aos="fade-up">
          <h2>React Native 앱(node.js)</h2>
          <hr />
          <div>
            <label>
              · 기여도 : 99% (ui디자인, db설계,개발, 배포,운영 담당함 (로고
              디자인 제외))
            </label>
            <br />
            <label>· 제작기간 : 2021-12 ~ 2022-02</label>
            <br />
            <label>
              · 기술스택 : React Native, javascript, node.js, express.js,
              mariaDB,firebase
            </label>
            <br />
            <label>· 기능 : </label>
            <br />
            <label> ┖ push 알람 기능.</label>
            <br />
            <label> ┖ 자동로그인 기능.</label>
            <br />
            <label> ┖ qr 코드 인식 기능.</label>
            <br />
            <label> ┖ 데이터 join등을 통해 새로운 데이터 도출.</label>
            <br />
            <label> ┖ db 프로시저를 활용하여 일괄처리 기능.</label>
            <br />
            <label> ┖ 이미지 첨부 및 이미지 확대보기 기능.</label>
            <br />
            <label> ┖ 데이터를 엑셀로 변환.</label>
            <br />
            <label>· 현재 apple 및 안드로이드에 등록하여 운영중.</label>
            <br />
          </div>
        </div>
        <div className="" ref={li7} data-aos="fade-up">
          <h2>.Net winforms 데스크탑앱(C#)</h2>
          <hr />
          <div>
            <label>
              · 기여도 : 98% (ui디자인, db설계,개발, 배포,운영 담당함(로고
              디자인, 배경화면 제외))
            </label>
            <br />
            <label>· 제작기간 : 2021-09 ~ 2021-12</label>
            <br />
            <label>· 기술스택 : C#. .net window forms, mssql</label>
            <br />
            <label>· 기능 : </label>
            <br />
            <label>
              {" "}
              ┖ 통장별 입금, 출금, 잔액 CRUD 기능 (통장 중간에 입금,출금을
              입력하더라도, 전체 잔액이 맞도록 설계)
            </label>
            <br />
            <label> ┖ 지출내역, 대출내역, 직원 월급 관리 등.</label>
            <br />
            <label>
              ┖ 데이터 입력하면, 관련된 데이터 Join 하여 새로운 데이터 도출.
            </label>
            <br />
            <label> ┖ DB 프로시저 기능으로, 일괄 처리 기능.</label>
            <br />
            <label> · 현재 운영중.</label>
            <br />
          </div>
        </div>
        <div className="" ref={li6} data-aos="fade-up">
          <h2>React 웹(node.js)</h2>
          <hr />
          <div>
            <label>
              · 기여도 : 60% (db설계,개발, 배포,운영 담당함(디자인 및 UI설계
              제외))
            </label>
            <br />
            <label>· 제작기간 : 2021-06 ~ 2021-08</label>
            <br />
            <label>
              · 기술스택 : React.js, javascript, node.js, express.js, mariaDB
            </label>
            <br />
            <label>
              · 홈페이지 :{" "}
              <a href="http://www.podc.co.kr" target={"_blank"}>
                http://www.podc.co.kr
              </a>
            </label>
            <br />
            <label> · 현재 운영중.</label>
            <br />
          </div>
        </div>
        <div className="" ref={li5} data-aos="fade-up">
          <h2>개인 PR 홈페이지</h2>
          <hr />
          <div>
            <label>· 기여도 : 100%</label>
            <br />
            <label>· 제작기간 : 2021.05</label>
            <br />
            <label>· 기술스택 : React.js, javascript, firebase</label>
            <br />
            <label> · 현재 운영중.</label>
            <br />
          </div>
        </div>
        <div className="" ref={li4} data-aos="fade-up">
          <h2>Android 앱</h2>
          <hr />
          <div>
            <label>
              · 기여도 : 99%(요구사항수집, ui설계, db설계, 코드작성, apk파일
              배포(로고디자인 제외))
            </label>
            <br />
            <label>· 제작기간 : 2021.02</label>
            <br />
            <label>· 기술스택 : android studio, java, mysql</label>
            <br />
            <label>· 기능 : </label>
            <br />
            <label> ┖ 프로젝트 일정 관리를 위한 CRUD</label>
            <br />
          </div>
        </div>
        <div className="" ref={li3} data-aos="fade-up">
          <h2>Android 앱</h2>
          <hr />
          <div>
            <label>· 기여도 : 100%</label>
            <br />
            <label>· 제작기간 : 2021.01</label>
            <br />
            <label>· 기술스택 : android studio, java, mysql</label>
            <br />
            <label>· 기능 : </label>
            <br />
            <label> ┖ 냉장고 온도값을 가져와서 그래프로 보여주는 기능.</label>
            <br />
            <label> ┖ 냉장고 온도값을 냉장고별로 분류하여 보여주는 기능.</label>
            <br />
            <label> ┖ 기준온도값을 사용자가 설정할 수 있는 기능.</label>
            <br />
            <label>
              {" "}
              ┖ 냉장고 온도가 기준 온도값을 우회하는 경우, 텍스트 색깔을 바꿔
              눈에 띄기 쉽게 보여주는 기능.
            </label>
            <br />
          </div>
        </div>
        <div className="" ref={li2} data-aos="fade-up">
          <h2>.Net window forms 데스크탑앱</h2>
          <hr />
          <div>
            <label>· 기여도 : 30% (ui설계, db설계, 코드작성)</label>
            <br />
            <label>· 제작기간 : 2021-01 ~ 2021-03</label>
            <br />
            <label>
              · 기술스택 : C#, .NET framework winform,devexpress, mariaDB
            </label>
            <br />
            <label>· 기능 : </label>
            <br />
            <label>
              {" "}
              ┖ kpi 관리, 수주관리 등 10여개의 화면 UI 제작 및 CRUD 기능 구현.
            </label>
            <br />
            <label>
              {" "}
              ┖ 사용자 편의를 도모하기 위하여, 세세한 기능 추가. (ex. 리스트
              전체선택, 수정후 원래 row로 돌아오기 등등)
            </label>
            <br />
          </div>
        </div>
        <div className="" ref={li1} data-aos="fade-up">
          <h2>Java Spring 웹싸이트 (토이프로젝트)</h2>
          <hr />
          <div>
            <label>· 기여도 : 100%</label>
            <br />
            <label>· 제작기간 : 2020-08</label>
            <br />
            <label>
              · 기술스택 : Java,Spring,mysql,Apache
              Tomcat,JavaScript,CSS,HTML5,jQuery
            </label>
            <br />
            <label>· 기능 : </label>
            <br />
            <label> ┖ 자영업 사장님들의 커뮤니티 싸이트</label>
            <br />
            <label>┖ 게시판 기능</label>
            <br />
            <label> ┖ 댓글기능</label>
            <br />
            <label> ┖ 뉴스 api 받아와 게시</label>
            <br />
            <label> ┖ 회원가입 및 로그인 기능.</label>
            <br />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <NavLink
              to={`/`}
              className="navbar-brand first"
              activeClassName="active"
            >
              <img className="logoLion" src={myIcon}></img>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
