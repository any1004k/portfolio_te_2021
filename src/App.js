import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//네비게이션(고정)
import Navbar from "./component/Navbar_C.js";

//페이지들
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Services from "./pages/Services.js";
import Portfolio from "./pages/Portfolio.js";
import Contacts from "./pages/Contacts.js";

import Erro404 from "./pages/Erro404.js";

// 라우터
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/*  라우터 설치 */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/AboutMe/:v1/:v2" component={AboutMe}></Route>
          <Route exact path="/Services/:v1/:v2" component={Services}></Route>
          <Route exact path="/Portfolio/:v1/:v2" component={Portfolio}></Route>
          <Route exact path="/Contacts/:v1/:v2" component={Contacts}></Route>
          <Route exact path="/404" component={Erro404}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
