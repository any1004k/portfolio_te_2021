import React, { Component } from "react";
import Axios from "axios";
import { firestore, auth } from "../firebase.js";
import * as Redux from "redux";
import { signInWithGoogle } from "../firebase.js";

class Contacts_read extends Component {
  // constructor() {
  //   super();
  //   this.modify_title = React.createRef();
  //   this.modify_writer = React.createRef();
  //   this.modify_contents = React.createRef();
  // }
  constructor() {
    super();
  }
  state = {
    tableLists: [],
    figure_state: "read",
    index: 0,
    title: "",
    writer: "",
    contents: "",
    currentUser: "-1",
  };

  //   componentDidMount는 컴포넌트가 마운트(렌더링)되고 난 이후 실행됨. => 데이터 로딩속도가 눈에 보이게 느림... 그냥 함수로 바꾸고,
  // render 함수 젤 위에서 호출해볼까?

  componentDidMount() {
    this.selectHandler();
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  logout = () => {
    auth.signOut();
  };
  selectHandler = () => {
    const tableLists_copy = [];
    let i = 0;
    firestore
      .collection("contacts")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          tableLists_copy.push({
            each_index: i,
            id: doc.id,
            Title: doc.data().Title,
            Writer: doc.data().Writer,
            Contents: doc.data().Contents,
            Date: doc.data().Date,
            GoogleId: doc.data().GoogleId,
          });
          i = i + 1;
        });
        this.setState({ tableLists: tableLists_copy });
      });
  };

  addHandler = () => {
    // debugger;
    let today = new Date();
    let newId = String(
      Number(this.state.tableLists[this.state.tableLists.length - 1].id) + 1
    );

    firestore.collection("contacts").doc(newId).set({
      Title: this.state.title,
      Writer: this.state.writer,
      Contents: this.state.contents,
      Date: today.toLocaleDateString(),
      GoogleId: this.state.currentUser.displayName,
    });
    this.selectHandler();
    this.setState({
      figure_state: "read",
      title: "",
      writer: "",
      contents: "",
    });
  };

  modifyHandler = (id) => {
    let today = new Date();
    firestore.collection("contacts").doc(id).update({
      Title: this.state.title,
      Writer: this.state.writer,
      Contents: this.state.contents,
      Date: today.toLocaleDateString(),
      GoogleId: this.state.currentUser.displayName,
    });
    console.log("수정되었습니다.");
    this.selectHandler();
    this.setState({
      figure_state: "read",
      title: "",
      writer: "",
      contents: "",
    });
  };
  deleteHandler = (id) => {
    firestore
      .collection("contacts")
      .doc(id)
      .delete()
      .then(() => {
        console.log("삭제되었습니다.");
        this.selectHandler();
        this.setState({ figure_state: "read" });
      });
  };

  render() {
    //로그인 표시
    let user = this.state.currentUser;
    let login = null;
    let user_name = null;
    if (user !== null && user !== "[object Object]") {
      user_name = this.state.currentUser.displayName;
      login = (
        <div className="login_message">
          <span>{user_name}님 반갑습니다! </span>
          &nbsp;&nbsp;<button onClick={this.logout}>로그아웃</button>
        </div>
      );
    }
    //테이블
    let _figure = null;
    let num = 0;
    if (this.state.figure_state === "read") {
      _figure = (
        <>
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
                  <tr key={`a ${val.id}`}>
                    <th scope="row">{val.id}</th>
                    <td
                      className={val.each_index}
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          index: e.currentTarget.attributes.class.value,
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
          <div className="write_button">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                if (user_name === null) {
                  signInWithGoogle();
                  if (user_name === null) {
                    return;
                  } else {
                    this.setState({ figure_state: "write" });
                  }
                } else {
                  this.setState({ figure_state: "write" });
                }
              }}
            >
              글쓰기
            </button>
          </div>
        </>
      );
    } else if (this.state.figure_state === "read_in") {
      _figure = (
        // <h1>{this.state.tableLists[this.state.listid - 1].Contents}</h1>
        <>
          <table className="table table-DIY-readin">
            <thead>
              <tr>
                <th
                  scope="col"
                  key={`a ${this.state.tableLists[this.state.index].id}`}
                >
                  <h3>
                    {this.state.tableLists[this.state.index].id}
                    {">   "}
                    {this.state.tableLists[this.state.index].Title}
                  </h3>
                  <h6 className="writer_date">
                    {this.state.tableLists[this.state.index].Writer}
                    {" | "}
                    {this.state.tableLists[this.state.index].Date}
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                key={`b ${this.state.tableLists[this.state.index].id}`}
                className="textarea"
              >
                <td>{this.state.tableLists[this.state.index].Contents}</td>
              </tr>
            </tbody>
          </table>
          <div className="write_button">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                e.preventDefault();
                if (user_name === null) {
                  signInWithGoogle();
                  if (user_name === null) {
                    return;
                  } else {
                    this.setState({
                      figure_state: "modify",
                      title: this.state.tableLists[this.state.index].Title,
                      writer: this.state.tableLists[this.state.index].Writer,
                      contents:
                        this.state.tableLists[this.state.index].Contents,
                    });
                  }
                } else {
                  this.setState({
                    figure_state: "modify",
                    title: this.state.tableLists[this.state.index].Title,
                    writer: this.state.tableLists[this.state.index].Writer,
                    contents: this.state.tableLists[this.state.index].Contents,
                  });
                }
              }}
            >
              수정
            </button>
            &nbsp;&nbsp;
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                e.preventDefault();
                this.setState({ figure_state: "read" });
              }}
            >
              목록
            </button>
          </div>
        </>
      );
    } else if (this.state.figure_state === "modify") {
      _figure = (
        <div className="modify_box">
          <input
            defaultValue={this.state.tableLists[this.state.index].Title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          ></input>
          <input
            defaultValue={this.state.tableLists[this.state.index].Writer}
            onChange={(e) => {
              this.setState({ writer: e.target.value });
            }}
          ></input>
          <textarea
            defaultValue={this.state.tableLists[this.state.index].Contents}
            onChange={(e) => {
              this.setState({ contents: e.target.value });
            }}
          ></textarea>
          <div className="write_button">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                e.preventDefault();
                this.setState({ figure_state: "read" });
              }}
            >
              취소
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                e.preventDefault();
                this.modifyHandler(this.state.tableLists[this.state.index].id);
              }}
            >
              저장
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={() => {
                this.deleteHandler(this.state.tableLists[this.state.index].id);
              }}
            >
              삭제
            </button>
          </div>
        </div>
      );
    } else if (this.state.figure_state === "write") {
      _figure = (
        <div className="write_box">
          <input
            placeholder="제목"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          ></input>
          <input
            placeholder="글쓴이"
            onChange={(e) => {
              this.setState({ writer: e.target.value });
            }}
          ></input>
          <textarea
            placeholder="내용"
            onChange={(e) => {
              this.setState({ contents: e.target.value });
            }}
          ></textarea>
          <div className="write_button">
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                e.preventDefault();
                this.setState({ figure_state: "read" });
              }}
            >
              취소
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-primary btn-lg btn-DIY"
              onClick={(e) => {
                e.preventDefault();
                this.addHandler();
              }}
            >
              저장
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <div>{login}</div>
          <div className="table-responsive-md">{_figure}</div>
        </div>
      </div>
    );
  }
}

export default Contacts_read;
