import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA_IRO8vai-CJwNF3duB7h5b-mn1JOIJJo",
  authDomain: "unichat-85371.firebaseapp.com",
  projectId: "unichat-85371",
  storageBucket: "unichat-85371.appspot.com",
  messagingSenderId: "816236480288",
  appId: "1:816236480288:web:2a7e4d3b007b0bb7a4b945"
}).auth();