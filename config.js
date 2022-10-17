//firebase key config setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDrMkOPRHZ-12DFU3UVsAr6s9mwoZxnjo",
  authDomain: "movieapp-d3824.firebaseapp.com",
  projectId: "movieapp-d3824",
  storageBucket: "movieapp-d3824.appspot.com",
  messagingSenderId: "913116396433",
  appId: "1:913116396433:web:8bc77759eaef032e45f830",
  measurementId: "G-98SQVDJ0BL",
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}  
export {firebase}