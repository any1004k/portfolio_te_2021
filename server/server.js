//데이터베이스
const fs = require("fs"); // 파일 읽어주는거
const mysql = require("mysql");
const databaseInfo = fs.readFileSync("./mysql_info.json");
const databaseInfo_obj = JSON.parse(databaseInfo); // 제이슨 파일을 => 자바스크립트 객체로 변환.

const db = mysql.createPool({
  host: databaseInfo_obj.host,
  user: databaseInfo_obj.user,
  password: databaseInfo_obj.password,
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

// 5000 포트 열어라
app.listen(5000);

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

// 겟 호출하면 반응.
app.get("/api/get", (req, res) => {
  const sqlStatment = "select * from test;";
  db.query(sqlStatment, (err, result) => {
    console.log("서버: 겟");
    res.send(result);
    // console.log(err);
  });
});
