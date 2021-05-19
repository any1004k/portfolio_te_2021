import React, { useState, useEffect } from "react";
import Axios from "axios";

// class Contacts extends React.Component {
//   render() {
function Contacts(props) {
  //서버와 통신하려고 (server.js에 정보보냄)
  let [movieName, fixMovieName] = useState("");
  let [review, fixReview] = useState("");
  let [movieList, fixMovieList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((re) => {
      fixMovieList(re.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:5000/api/insert", {
      col1: movieName,
      col2: "하세요",
    });

    //fixMovieList([...movieList, { col1: movieName, col2: review }]);
  };

  // 브라우저와 데이터 주고받으려고
  const { params } = props.match;
  console.log(params);

  //리턴값
  return (
    <div>
      <h1>컨택트. 브라우저에서 받은 값: {params.v1}</h1>

      <label>DB와 통신</label>
      <input
        type="text"
        name="movieName"
        onChange={(e) => {
          fixMovieName(e.target.value);
        }}
      ></input>
      <button onClick={submitReview}>제출</button>
      {movieList.map((val) => {
        return (
          <h1>
            영화이름 : {val.col1} | 소감 : {val.col2}
          </h1>
        );
      })}
    </div>
  );
}

export default Contacts;
