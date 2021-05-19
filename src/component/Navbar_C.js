import React, { useRef } from "react";
import logo from "../img/logo.png";
// 리엑트 폰트아썸을 가져오기.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  //let a_ref = useRef(null);
  const a = "하이염";
  const b = "값입니다.";

  // function handleFocus() {
  //   a_ref.current.className += " active";
  //   alert(a_ref.current.className);
  // }
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
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active2">
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/AboutMe/${a}/${b}`}
                className="nav-link"
                activeClassName="active"
              >
                ABOUT ME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/Services/${a}/${b}`}
                className="nav-link"
                activeClassName="active"
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/Portfolio/${a}/${b}`}
                className="nav-link"
                activeClassName="active"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/Contacts/read`}
                className="nav-link"
                activeClassName="active"
              >
                CONTACTS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
