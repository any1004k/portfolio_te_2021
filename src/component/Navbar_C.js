import React from "react";
import logo from "../img/logo.png";
// 리엑트 폰트아썸을 가져오기.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const a = "하이염";
  const b = "값입니다.";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logoLion" src={logo}></img>
        </a>

        {/* 작은화면일 때 햄버거 메뉴 만들기 : 기존의 버튼에서 텍스트 넣는 곳에 폰트아썸 엘레먼트를 넣으면 됨 */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href={`/AboutMe/${a}/${b}`} className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a href={`/Services/${a}/${b}`} className="nav-link">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a href={`/Portfolio/${a}/${b}`} className="nav-link">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a href={`/Contacts/${a}/${b}`} className="nav-link">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
