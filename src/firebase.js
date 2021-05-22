import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxBGoEQZFRnwO-SBMjEUtO_sKmKY_ysDI",
  authDomain: "portfolio-te-2021.firebaseapp.com",
  databaseURL: "https://portfolio-te-2021-default-rtdb.firebaseio.com",
  projectId: "portfolio-te-2021",
  storageBucket: "portfolio-te-2021.appspot.com",
  messagingSenderId: "397367492692",
  appId: "1:397367492692:web:47001edb8416f739646dc1",
  measurementId: "G-85RDGMXJ2R",
};

firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();
export { firestore };
