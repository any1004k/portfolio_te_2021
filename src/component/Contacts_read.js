import React, { Component } from "react";
import Axios from "axios";
import { firestore } from "../firebase.js";
import * as Redux from "redux";

class Contacts_read extends Component {
  state = {
    tableLists: [],
    figure_state: "read",
    listNum: 0,
  };

  //   componentDidMount는 컴포넌트가 마운트(렌더링)되고 난 이후 실행됨. => 데이터 로딩속도가 눈에 보이게 느림... 그냥 함수로 바꾸고,
  // render 함수 젤 위에서 호출해볼까?
  componentDidMount() {
    const tableLists_copy = [...this.state.tableLists];
    firestore
      .collection("contacts")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          tableLists_copy.push({
            num: doc.id,
            Title: doc.data().Title,
            Writer: doc.data().Writer,
            Contents: doc.data().Contents,
            Date: doc.data().Date,
          });
        });
        this.setState({ tableLists: tableLists_copy });
      });
    console.log("데이터 넘어왔낭" + this.state.tableLists.length);
  }

  render() {
    let _figure = null;
    let num = 0;
    if (this.state.figure_state === "read") {
      _figure = (
        <table className="table table-hover table-DIY">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> 제 목 </th>
              <th scope="col">글쓴이</th>
              <th scope="col">작성일자</th>
            </tr>
          </thead>

          <tbody>
            {this.state.tableLists.map((val) => {
              return (
                <tr key={`a ${val.num}`}>
                  <th scope="row">{val.num}</th>
                  <td
                    className={val.num}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        listNum: e.currentTarget.attributes.class.value,
                      });
                      this.setState({ figure_state: "read_in" });
                    }}
                  >
                    {val.Title}
                  </td>
                  <td>{val.Writer}</td>
                  <td>{val.Date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else if (this.state.figure_state === "read_in") {
      _figure = (
        // <h1>{this.state.tableLists[this.state.listNum - 1].Contents}</h1>

        <table className="table table-hover table-DIY">
          <thead>
            <tr>
              <th
                scope="col"
                key={`a ${this.state.tableLists[this.state.listNum - 1].num}`}
              >
                {this.state.tableLists[this.state.listNum - 1].num}
                {this.state.tableLists[this.state.listNum - 1].Title}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key={`b ${this.state.tableLists[this.state.listNum - 1].num}`}>
              <td colSpan="2">
                {this.state.tableLists[this.state.listNum - 1].Contents}
              </td>
            </tr>

            <tr>
              <td>{this.state.tableLists[this.state.listNum - 1].Writer}</td>
              <td>{this.state.tableLists[this.state.listNum - 1].Date}</td>
            </tr>
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <div className="container">
          <div className="table-responsive-md">
            {_figure}
            <div className="write_button">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={(e) => {
                  this.props.onChange();
                }}
              >
                글쓰기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts_read;
