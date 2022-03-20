import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/jquery.bxslider.css";

//네비게이션(고정)
import Navbar from "./component/Navbar_C.js";

//페이지들
import Home from "./pages/Home.js";
import Skills from "./pages/Skills.js";
import Portfolio from "./pages/Portfolio.js";
// import Contacts from "./pages/Contacts.js";
import AboutMe from "./pages/AboutMe.js";

import Erro404 from "./pages/Erro404.js";

// 라우터
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        {/* 페이지를 바꿔버리는 라우터 설치. "<Navbar />"" 에 NAVLINK를 이용해 네비게이션 컴포넌트는 렌더링 안되게 했음. */}
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route exact path="/AboutMe/:v1/:v2" component={AboutMe}></Route> */}
            <Route exact path="/AboutMe" component={AboutMe}></Route>
            <Route exact path="/Skills" component={Skills}></Route>
            <Route exact path="/Portfolio" component={Portfolio}></Route>
            {/* <Route exact path="/Contacts" component={Contacts}></Route> */}
            <Route exact path="/404" component={Erro404}></Route>
            <Redirect to="/404"></Redirect>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
