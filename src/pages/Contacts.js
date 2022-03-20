import React, { Component } from "react";
import Axios from "axios";
// import { firestore } from "../firebase.js";
import * as Redux from "redux";
import Contacts_read from "../component/Contacts_read.js";

// class Contacts extends React.Component {
//   render() {
class Contacts extends Component {
  state = {
    mode: "read",
    listNum: "",
  };

  render() {
    const { params } = this.props.match;
    let v1 = params.v1;
    console.log(v1);

    let view = null;
    if (this.state.mode === "read") {
      view = <Contacts_read></Contacts_read>;
    }

    return <>{view}</>;
  }
}

//함수형 컴포넌트로 로컬 웹서버와 통신할 때
// let [title, fix_title] = useState("");
// let [writer, fix_writer] = useState("");
// let [objectList, fix_objects] = useState([]);

// useEffect(() => {
//   Axios.get("http://localhost:5001/contacts/get").then((re) => {
//     fix_objects(re.data);
//     console.log(re);
//   });
// }, []);

// const submitReview = () => {
//   Axios.post("http://localhost:5001/api/insert", {
//     title: title,
//     writer: writer,
//   });

//   //fixMovieList([...movieList, { col1: movieName, col2: review }]);
// };

// 브라우저와 데이터 주고받으려고
// const { params } = props.match;
// console.log(params);
export default Contacts;
