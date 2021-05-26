import React from "react";
import me from "../img/me3.jpg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container Aboutme_container">
        <div>
          <img className="Aboutme_Picture" src={me}></img>
        </div>

        <div className="Aboutme_text">
          <h1> About me. </h1>
          <br />
          <p>
            {" "}
            안녕하세요, 프로그래머 김태은입니다.
            <br />
            <br />
            항상 배우고 발전하는 자세로, <br />
            고객님께 고품질의 프로그램을 만들어 드리기 위해 최선을 다하겠습니다.{" "}
            <br /> <br />
            지금 구상하시는 사업을 온라인 상에 이뤄드리는 최고의 파트너, <br />
            프로그래머 김태은과 꿈을 펼쳐보세요.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
