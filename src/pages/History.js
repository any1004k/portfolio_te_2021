import React, { useEffect, useState, useRef } from "react";
//리덕스
import { connect } from "react-redux";
import { action1, action2, action8 } from "../../../store.js";

//네비게이션바
import NavBar from "../../NavBar.js";

//이미지
import logo_white from "../../../img/introduce/logo_white.png";
import finger from "../../../img/introduce/finger.png";
import arrow from "../../../img/introduce/arrow.png";
import work1 from "../../../img/introduce/historyWorks/work1.jpg";
import work3 from "../../../img/introduce/historyWorks/work3.jpg";
import work5 from "../../../img/introduce/historyWorks/work5.jpg";
import work6 from "../../../img/introduce/historyWorks/work6.jpg";
import work7 from "../../../img/introduce/historyWorks/work7.jpg";
import work8 from "../../../img/introduce/historyWorks/work8.jpg";
import work9 from "../../../img/introduce/historyWorks/work9.jpg";
import work10 from "../../../img/introduce/historyWorks/work10.jpg";
import work11 from "../../../img/introduce/historyWorks/work11.jpg";
import work12 from "../../../img/introduce/historyWorks/work12.jpg";
import work13 from "../../../img/introduce/historyWorks/work13.jpg";
import work14 from "../../../img/introduce/historyWorks/work14.jpg";
import work15 from "../../../img/introduce/historyWorks/work15.jpg";
import work16 from "../../../img/introduce/historyWorks/work16.jpg";
import work17 from "../../../img/introduce/historyWorks/work17.jpg";
import work18 from "../../../img/introduce/historyWorks/work18.jpg";

//제이쿼리
import $ from "jquery";
import { findDOMNode } from "react-dom";

// 라우터
import { NavLink } from "react-router-dom";

//aos(스크롤 할 때  애니매이션)
import Aos from "aos";
import "aos/dist/aos.css";

//gsap & 스크롤매직
import { gsap, ScrollTrigger } from "gsap/all";

//리덕스가 쓰는 거
let subView = "history1";
let langlang = "";

function History(props) {
  const container2 = useRef([]);

  // 영어
  let [lanButton, setlanButton] = useState("ENG");

  let lang = [];
  let ko_lang = [
    '"40여년"',
    "태평양 해양산업이 바다와 걸어온 시간입니다.",
    "태평양수중개발 설립",
    "전문건설 수중공사업 면허 획득",
    "프랑스 선급(B.V)인증서 획득",
    "미국 선급(A.B.S)인증서 획득",
    "독일 선급(G.L)인증서 획득",
    "영국 선급(L.R)인증서 획득",
    "한국 선급(K.R)인증서 획득",
    "노르웨이 선급(D.N.V)인증서 획득",
    "일본 선급(N.K)인증서 획득",
    "어장정화, 정비업면허 획득",
    "K.R 품질경영시스템(ISO 9001)인증 획득",
    "K.R 품질경영시스템(ISO 9002)로 통합 전환",
    "이탈리아 선급(RINA)인증 획득",
    "해외지사 설립(POUSC,필리핀)",
    "폐기물해양수거업 획득",
    "사옥 신축이전",
    "선박 구성품 제조업 등록",
    "(주)태평양해양산업 법인 전환",
    "해외건설업 등록",
    "안전보건경영시스템(OHSAS 18001) 인증 획득",
    "ADCI membership certificate 획득",
    "International Salvage Union(ISU) 인증 획득",
    "철근 콘크리트 공사업 등록",
    "해양오염방제업 등록",
    "울산 지사 설립",
    "여수 지사 설립",
    "엔지니어링 사업자 신고",
    "CEO인사말",
    "안전보건경영방침",
    "회사연혁",
    "CI소개",
    "사업장소개",
  ];

  let en_lang = [
    '"about 40 years"',
    "This is the time the Pacific Ocean industry has walked with the sea.",
    "Establishment of Pacific Underwater Development",
    "Acquired a license for professional underwater construction",
    "Acquired a French Advanced (B.V.) Certificate",
    "Acquired a US Advanced (A.B.S) Certificate",
    "Acquired a German Advanced (G.L) Certificate",
    "Acquired a UK Advanced (L.R) Certificate",
    "Acquired a Korean Advanced (K.R) certificate",
    "Acquired a Norwegian Advanced (D.N.V.) Certificate",
    "Acquired a Japan Advanced (N.K) Certificate",
    "Acquired Fish farm purification and maintenance license",
    'Acquired a "K.R ISO 9001"',
    "Converting to K.R Quality Management System (ISO 9002)",
    "Acquired a Italian Advanced (RINA) Certificate",
    "Establishment of overseas branches (PUSC, Philippines)",
    "Qualified to collect marine waste",
    "Moving to a new building.",
    "Registered as a company that manufactures ship components.",
    "Transition to Pacific Ocean Industry Co., Ltd.",
    "Registered overseas construction business",
    "Certified Safety and Health Management System (OHSAS 18001)",
    "Acquired a ADCI membership certificate",
    "Acquired a International Salvage Union(ISU) certificate",
    "Registered reinforced concrete construction business",
    "Registered control of marine pollution business",
    "Establishment of branch office in Ulsan",
    "Establishment of branch office in Yeosu",
    "Declared to be in the engineering business",
    "Greetings",
    "KOSHA-MS",
    "History",
    "CI",
    "Business Site",
  ];

  switch (lanButton) {
    case "ENG":
      lang = ko_lang;
      $(".ht").removeClass("en");
      break;
    case "KOR":
      lang = en_lang;
      $(".ht").addClass("en");
      break;
  }

  //각 부문별 메인에 걸린 스크롤 이벤트 끔
  $(window).off("scroll");
  let [mobile, setMobile] = useState();

  let page = "";

  switch (props.sub_menu) {
    case "history1":
      $(".historyTop.mobile .Introduce").css("display", "none");
      page = (
        <>
          <div className="ht history1">
            <div className="text">
              <img data-aos="fade-up" src={logo_white} alt="" />
              <br />
              <br />
              <div
                data-aos="fade-up"
                data-aos-delay="1500"
                style={{ fontSize: "2vw" }}
              >
                <b>{lang[0]}</b>
              </div>

              <div data-aos="fade-up" data-aos-delay="2500">
                {lang[1]}
              </div>
            </div>
            <div className="Scroll">
              <div className="scroll_text" style={{ color: "white" }}>
                Scroll Down
              </div>
              <div className="scrollDown_img">
                <div className="scroll scroll1"></div>
                <div className="scroll scroll2"></div>
                <div className="scroll scroll3"></div>
              </div>
            </div>
          </div>
        </>
      );
      break;
    case "history2":
      $(".historyTop.mobile .Introduce").css("display", "block");
      page = (
        <>
          <div className=" ht history2">
            <div className="wrap_title">
              <h1 className="introduce_title">History</h1>
            </div>
            {/* <img className="arrow" src={arrow} alt="" />
            <img className="finger" src={finger} alt="" /> */}
            <div id="container2" className="aaa" ref={container2}>
              <div className="module"></div>

              <div className="module history_contents">
                <div className="textBox">
                  <b className="years">1986</b>
                  <b className="years">1990</b>
                  <b className="years">2000</b>
                  <b className="years">2010</b>
                  <b className="years">2020</b>

                  <div className="middleBar">
                    <progress max="100" value="0"></progress>
                    <div
                      className="likeProgress"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div className="lines">
                    <div className="line line1 active">
                      <div className="box">
                        <h4>
                          <b>1986</b>
                        </h4>
                        <hr />
                        {/* <h6><b>09</b> &emsp; 태평양수중개발 설립</h6> */}
                        <h6>&#8226; {lang[2]}</h6>
                      </div>
                    </div>
                    <div className="line line2 active">
                      <div className="box">
                        <h4>
                          <b>1989</b>
                        </h4>
                        <hr />
                        {/* <h6><b>11</b> &emsp; 전문건설 수중공사업 면허 획득</h6> */}
                        <h6>&#8226; {lang[3]}</h6>
                      </div>
                    </div>
                    <div className="line line3 active">
                      <div className="box">
                        <h4>
                          <b>1994</b>
                        </h4>
                        <hr />
                        {/* <h6><b>06</b> &emsp; 프랑스 선급(B.V)인증서 획득</h6> */}
                        <h6>&#8226; {lang[4]}</h6>
                      </div>
                    </div>
                    <div className="line line4 active">
                      <div className="box">
                        <h4>
                          <b>1995</b>
                        </h4>
                        <hr />
                        {/* <h6><b>05</b> &emsp; 미국 선급(A.B.S)인증서 획득</h6> */}
                        <h6>&#8226; {lang[5]}</h6>
                      </div>
                    </div>
                    <div className="line line5" style={{ top: "200px" }}>
                      <div className="box">
                        <h4>
                          <b>1996</b>
                        </h4>
                        <hr />
                        <h6>&#8226; {lang[6]}</h6>
                        <h6>&#8226; {lang[7]}</h6>
                        <h6>&#8226; {lang[8]}</h6>
                        {/* <h6> <b>07</b>&emsp;독일 선급(G.L)인증서 획득</h6>
                                    <h6> <b>06</b>&emsp;영국 선급(L.R)인증서 획득</h6>
                                    <h6> <b>05</b>&emsp;한국 선급(K.R)인증서 획득</h6> */}
                      </div>
                    </div>

                    <div className="line line6">
                      <div className="box">
                        <h4>
                          <b>1997</b>
                        </h4>
                        <hr />
                        {/* <h6><b>11</b> &emsp; 노르웨이 선급(D.N.V)인증서 획득</h6> */}
                        <h6>&#8226; {lang[9]}</h6>
                      </div>
                    </div>

                    <div className="line line8">
                      <div className="box">
                        <h4>
                          <b>1998</b>
                        </h4>
                        <hr />
                        {/* <h6><b>09</b> &emsp; 일본 선급(N.K)인증서 획득</h6> */}
                        <h6>&#8226; {lang[10]}</h6>
                      </div>
                    </div>
                    <div className="line line9">
                      <div className="box">
                        <h4>
                          <b>2001</b>
                        </h4>
                        <hr />
                        <h6>&#8226; {lang[11]}</h6>
                        <h6>&#8226; {lang[12]}</h6>
                        {/* <h6><b>11</b> &emsp; 어장정화, 정비업면허 획득</h6>
                                    <h6><b>01</b> &emsp;K.R 품질경영시스템(ISO 9001)인증 획득</h6> */}
                      </div>
                    </div>
                    <div className="line line10">
                      <div className="box">
                        <h4>
                          <b>2003</b>
                        </h4>
                        <hr />
                        {/* <h6>&#8226; {lang[13]}</h6> */}
                        <h6>&#8226; {lang[14]}</h6>
                      </div>
                    </div>

                    <div className="line line12">
                      <div className="box">
                        <h4>
                          <b>2008</b>
                        </h4>
                        <hr />
                        <h6>&#8226; {lang[15]}</h6>
                        {/* <h6>&#8226; {lang[16]}</h6> */}
                      </div>
                    </div>
                    <div className="line line13">
                      <div className="box">
                        <h4>
                          <b>2009</b>
                        </h4>
                        <hr />
                        <h6>&#8226; {lang[17]}</h6>
                        <h6>&#8226; {lang[18]}</h6>
                        {/* <h6><b>09</b>&emsp; 사옥 신축이전</h6>
                                    <h6><b>09</b>&emsp; 선박 구성품 제조업 등록</h6> */}
                      </div>
                    </div>
                    <div className="line line14">
                      <div className="box">
                        <h4>
                          <b>2010</b>
                        </h4>
                        <hr />
                        {/* <h6><b>07</b>&emsp;(주)태평양해양산업 법인 전환 </h6> */}
                        <h6>&#8226; {lang[19]}</h6>
                      </div>
                    </div>
                    <div className="line line15">
                      <div className="box">
                        <h4>
                          <b>2011</b>
                        </h4>
                        <hr />
                        {/* <h6><b>10</b> &emsp; 해외건설업 등록</h6> */}
                        <h6>&#8226; {lang[20]}</h6>
                      </div>
                    </div>
                    <div className="line line16">
                      <div className="box">
                        <h4>
                          <b>2014</b>
                        </h4>
                        <hr />
                        {/* <h6><b>10</b> &emsp;  안전보건경영시스템(OHSAS 18001) 인증 획득</h6> */}
                        <h6>&#8226; {lang[21]}</h6>
                      </div>
                    </div>
                    <div className="line line17">
                      <div className="box">
                        <h4>
                          <b>2015</b>
                        </h4>
                        <hr />
                        {/* <h6><b>04</b> &emsp; ADCI membership certificate 획득</h6> */}
                        <h6>&#8226; {lang[22]}</h6>
                      </div>
                    </div>
                    <div className="line line18">
                      <div className="box">
                        <h4>
                          <b>2016</b>
                        </h4>
                        <hr />
                        {/* <h6><b>11</b> &emsp; International Salvage Union(ISU) 인증 획득</h6> */}
                        <h6>&#8226; {lang[23]}</h6>
                      </div>
                    </div>
                    <div className="line line19">
                      <div className="box">
                        <h4>
                          <b>2017</b>
                        </h4>
                        <hr />
                        <h6>&#8226; {lang[24]}</h6>
                        <h6>&#8226; {lang[25]}</h6>
                        {/* <h6><b>09</b> &emsp; 철근 콘크리트 공사업 등록</h6>
                                    <h6><b>04</b> &emsp; 해양오염방제업 등록</h6> */}
                      </div>
                    </div>
                    <div className="line line20">
                      <div className="box">
                        <h4>
                          <b>2018</b>
                        </h4>
                        <hr />
                        {/* <h6><b>10</b> &emsp; 울산 지사 설립</h6> */}
                        <h6>&#8226; {lang[26]}</h6>
                      </div>
                    </div>
                    <div className="line line21">
                      <div className="box">
                        <h4>
                          <b>2019</b>
                        </h4>
                        <hr />
                        {/* <h6><b>10</b> &emsp; 여수 지사 설립</h6> */}
                        <h6>&#8226; {lang[27]}</h6>
                      </div>
                    </div>
                    <div className="line line22">
                      <div className="box">
                        <h4>
                          <b>2021</b>
                        </h4>
                        <hr />
                        {/* <h6><b>04</b> &emsp; 엔지니어링 사업자 신고</h6> */}
                        <h6>&#8226; {lang[28]}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgBox">
                  <img className="historyImg img1 active" src={work1} alt="" />
                  {/* <img className="historyImg img3 active" src={work3} alt="" /> */}
                  <img className="historyImg img5" src={work5} alt="" />
                  <img className="historyImg img6" src={work6} alt="" />
                  {/* <img className="historyImg img7" src={work7} alt="" /> */}
                  <img className="historyImg img8" src={work8} alt="" />
                  {/* <img className="historyImg img9" src={work9} alt="" /> */}
                  <img className="historyImg img10" src={work10} alt="" />
                  <img className="historyImg img11" src={work11} alt="" />
                  <img className="historyImg img12" src={work12} alt="" />
                  {/* <img className="historyImg img13" src={work13} alt="" /> */}
                  <img className="historyImg img14" src={work14} alt="" />
                  <img className="historyImg img15" src={work15} alt="" />
                  <img className="historyImg img16" src={work16} alt="" />
                  <img className="historyImg img17" src={work17} alt="" />
                  <img className="historyImg img18" src={work18} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      );

      break;
  }

  let whenMobile_blueMenu = "";
  switch (mobile) {
    case true:
      whenMobile_blueMenu = (
        <>
          <div className="Introduce Services History">
            <div className="subTilteBox">
              <div className="wrapLi">
                <li>
                  <NavLink to="/t1/s1/Introduce1" onClick={() => {}}>
                    {lang[29]}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/t1/s1/Introduce2" onClick={() => {}}>
                    {lang[30]}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/t1/s1/History"
                    onClick={() => {
                      subView = "history1";
                      props.action2(subView);
                    }}
                  >
                    {lang[31]}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/t1/s1/Introduce4" onClick={() => {}}>
                    {lang[32]}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/t1/s1/Introduce5" onClick={() => {}}>
                    {lang[33]}
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </>
      );
      break;
    case false:
      whenMobile_blueMenu = <></>;
  }

  useEffect(() => {
    // console.log(props.sub_menu);

    $("body").addClass("noScroll");
    // alert(window.innerWidth);

    switch (props.sub_menu) {
      case "history1":
        if (window.innerWidth < 835) {
          setMobile(true);
        } else if (window.innerWidth >= 835) {
          setMobile(false);
        }
        break;
      case "history2":
        // console.log(mobile);
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        });

        if (mobile === true) {
          $(".history2").addClass("mobile");
          $(".historyTop").addClass("mobile");
          let triggers = ScrollTrigger.getAll();
          triggers.forEach((trigger) => {
            trigger.kill();
          });
        } else {
          $(".history2").removeClass("mobile");
          $(".historyTop").removeClass("mobile");

          let module = gsap.utils.toArray(".module");
          let maxWidth = 0;
          const getMaxWidth = () => {
            maxWidth = 0;
            module.forEach((i) => {
              maxWidth += i.offsetWidth;
            });
          };
          getMaxWidth();
          ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

          gsap.to("#container2", {
            x: () => `-${maxWidth - window.innerWidth}`, // 한번 스크롤에 옆으로 가는 양, 작을수록 한번 스크롤에 프로그래스바가 확 끝까지 가고, 프로그래스바가 보임.
            ease: "none",
            id: "movemove",
            scrollTrigger: {
              trigger: "#container2",
              pin: true,
              scrub: true,
              end: () => `+=${maxWidth}`,
              invalidateOnRefresh: true,
            },
          });

          //프로그레스바
          gsap.to("progress", {
            value: 100,
            ease: "none",
            scrollTrigger: { scrub: 0.3 },
          });
        }

        break;
    }

    $(window).on("resize", function () {
      if (window.innerWidth < 1200) {
        setMobile(true);
      } else if (window.innerWidth >= 1200) {
        setMobile(false);
      }
    });

    $(".history1").on("mousewheel touchmove", function () {
      subView = "history2";
      props.action2(subView);
    });

    $(".history2").on("mousewheel", function (e) {
      // console.log("윈도우 넓이" + window.innerWidth);

      if (window.innerWidth + window.scrollX > $(".line5").offset().left) {
        $(".line5").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line6").offset().left) {
        $(".line6").addClass("active");
      }

      if (window.innerWidth + window.scrollX > $(".line8").offset().left) {
        $(".line8").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line9").offset().left) {
        $(".line9").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line10").offset().left) {
        $(".line10").addClass("active");
      }

      if (window.innerWidth + window.scrollX > $(".line12").offset().left) {
        $(".line12").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line13").offset().left) {
        $(".line13").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line14").offset().left) {
        $(".line14").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line15").offset().left) {
        $(".line15").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line16").offset().left) {
        $(".line16").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line17").offset().left) {
        $(".line17").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line18").offset().left) {
        $(".line18").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line19").offset().left) {
        $(".line19").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line20").offset().left) {
        $(".line20").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line21").offset().left) {
        $(".line21").addClass("active");
      }
      if (window.innerWidth + window.scrollX > $(".line22").offset().left) {
        $(".line22").addClass("active");
      }

      //이미지
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img5").offset().left
      ) {
        $(".history2 .img5").addClass("active");
      }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img6").offset().left
      ) {
        $(".history2 .img6").addClass("active");
      }
      // if (window.innerWidth + window.scrollX > $(".imgBox .img7").offset().left) {
      //     $('.history2 .img7').addClass('active');
      // }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img8").offset().left
      ) {
        $(".history2 .img8").addClass("active");
      }
      // if (window.innerWidth + window.scrollX > $(".imgBox .img9").offset().left) {
      //     $('.history2 .img9').addClass('active');
      // }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img10").offset().left
      ) {
        $(".history2 .img10").addClass("active");
      }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img11").offset().left
      ) {
        $(".history2 .img11").addClass("active");
      }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img12").offset().left
      ) {
        $(".history2 .img12").addClass("active");
      }
      // if (window.innerWidth + window.scrollX > $(".imgBox .img13").offset().left) {
      //     $('.history2 .img13').addClass('active');
      // }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img14").offset().left
      ) {
        $(".history2 .img14").addClass("active");
      }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img15").offset().left
      ) {
        $(".history2 .img15").addClass("active");
      }
      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img16").offset().left
      ) {
        $(".history2 .img16").addClass("active");
      }

      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img17").offset().left
      ) {
        $(".history2 .img17").addClass("active");
      }

      if (
        window.innerWidth + window.scrollX >
        $(".imgBox .img18").offset().left
      ) {
        $(".history2 .img18").addClass("active");
      }
    });

    switch (props.lang) {
      case "ko":
        setlanButton("ENG");
        break;
      case "en":
        setlanButton("KOR");
        break;
    }
  }, [container2, mobile, props.sub_menu, props.lang]); // 유즈이팩트 끝

  return (
    <>
      <div className="history2 changeUrl">
        <NavBar />
      </div>
      <div className="historyTop">{whenMobile_blueMenu}</div>
      {page}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    sub_menu: state.subMenu_reducer.sub_menu,
    lang: state.lang_reducer.lang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action2: () => {
      dispatch(action2(subView));
    },
    action8: () => {
      dispatch(action8(langlang));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
