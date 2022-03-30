import React from "react";
import myIcon from "../img/myIcon.png";
//aos(스크롤 할 때  애니매이션)
// import Aos from "aos";
// import "aos/dist/aos.css";
//3d배경
// import BIRDS from "vanta/dist/vanta.birds.min";
import DOTS from "vanta/dist/vanta.dots.min";
//이미지
import node from "../img/skills/node.jpg";
import express from "../img/skills/express.png";
import js from "../img/skills/js.png";
import htmlCss from "../img/skills/htmlCss.png";
import java from "../img/skills/java.png";
import jsp from "../img/skills/jsp.png";
import react from "../img/skills/react.png";
import reactNative from "../img/skills/reactNative.png";
import spring from "../img/skills/spring.png";

import csharp from "../img/skills/csharp.png";
import jquery from "../img/skills/jquery.png";

import git from "../img/skills/git.png";
import github from "../img/skills/github.png";
import fireBase from "../img/skills/fireBase.png";
import mssql from "../img/skills/mssql.png";
import mysql from "../img/skills/mysql.png";
import mariaDB from "../img/skills/mariaDB.png";
import vs from "../img/skills/vs.png";
import vsc from "../img/skills/vsc.png";
import androidStudio from "../img/skills/androidStudio.png";
import eclipse from "../img/skills/eclipse.png";

import c from "../img/skills/c.png";
import python from "../img/skills/python.png";
import typeScript from "../img/skills/typeScript.png";

function Skills() {
  //$("nav:not(.bg-dark)").addClass("bg-dark");

  const [vantaEffect, setVantaEffect] = React.useState(0);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    // Aos.init({ duration: 1500 }); //이거 없으면 작동이 안되는듯?

    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xbebebe, // 점색깔
          // color: 0xff8820,
          color2: 0x202020, //배경색
          // color2: 0x222222,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      className="skills"
      ref={myRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100vh",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <p style={{ color: "white" }}> 실제 프로젝트에 활용한 기술</p>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
          }}
        >
          <img
            src={node}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={express}
            style={{
              width: 190,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={js}
            style={{
              width: 100,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={csharp}
            style={{
              width: 100,
              height: 100,
              margin: 5,
              backgroundColor: "white",
            }}
          />
          <img
            src={java}
            style={{
              width: 120,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={jsp}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={jquery}
            style={{
              width: 120,
              height: 100,
              margin: 5,
              backgroundColor: "white",
            }}
          />
          <img
            src={htmlCss}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          {/* 프레임워크 */}
          <img
            src={react}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />

          <img
            src={reactNative}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={spring}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          {/* 그외 */}
          <img
            src={git}
            style={{
              width: 120,
              height: 100,
              margin: 5,
              backgroundColor: "white",
            }}
          />
          <img
            src={github}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={fireBase}
            style={{
              width: 200,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={mssql}
            style={{
              width: 130,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={mysql}
            style={{
              width: 120,
              height: 100,
              margin: 5,
              backgroundColor: "white",
            }}
          />
          <img
            src={mariaDB}
            style={{
              width: 170,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={vs}
            style={{
              width: 180,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={vsc}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={androidStudio}
            style={{
              width: 220,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={eclipse}
            style={{
              width: 200,
              height: 100,
              margin: 5,
            }}
          />
        </div>
        <div>
          <p style={{ color: "white" }}>이론으로 공부한 기술</p>
          <hr />
        </div>
        <div>
          <img
            src={python}
            style={{
              width: 150,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={typeScript}
            style={{
              width: 200,
              height: 100,
              margin: 5,
            }}
          />
          <img
            src={c}
            style={{
              width: 100,
              height: 100,
              margin: 5,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
