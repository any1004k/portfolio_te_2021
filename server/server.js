//데이터베이스
const fs = require("fs"); // 파일 읽어주는거
const mysql = require("mysql");
const databaseInfo = fs.readFileSync("./mysql_info.json");
const databaseInfo_obj = JSON.parse(databaseInfo); // 제이슨 파일을 => 객체로 변환.

const db = mysql.createPool({
  host: databaseInfo_obj.host,
  user: databaseInfo_obj.user,
  password: databaseInfo_obj.password,
  port: databaseInfo_obj.port,
  database: databaseInfo_obj.database,
});

// 미들웨어
const express = require("express");
const cors = require("cors");
const app = express(); //미들웨어를 app에 담고
app.use(express.json());
app.use(cors()); // 뭐지.. 이게 필요하다 했음.

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//포트
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`백엔드 서버가 돌고 있는 포트는 : ${PORT}`);
});

/*******************  Contacts *********************/

// 3000포트에서 호출하면 반응.
app.get("/contacts/get", (req, res) => {
  // const sqlStatment = "select * from contacts;";
  const sqlStatment = "select * from projects;";
  db.query(sqlStatment, (err, result) => {
    console.log("서버: 컨텍츠 테이블에서 겟해왔습니다.");
    console.log("받아왔따" + result);
    console.log("에러다" + err);
    res.send(result); //호출한 곳에 값을 보내줌
  });
});

// 제출 누르면 axios 에서 보낸걸 여기서 받음.
app.post("/api/insert", (req, rep) => {
  const col1 = req.body.col1;
  const col2 = req.body.col2;

  const sqlStatment = "insert into test values(?,?);";
  db.query(sqlStatment, [col1, col2], (err, result) => {
    console.log(result);
    console.log(err);
  });
  console.log("3001 서버: 인서트");
});
