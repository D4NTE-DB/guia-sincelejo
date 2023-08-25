// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGd1DgsvjPsnVIbRIDKY1Vqmmv2F9ktkA",
  authDomain: "guiasincelejo.firebaseapp.com",
  projectId: "guiasincelejo",
  storageBucket: "guiasincelejo.appspot.com",
  messagingSenderId: "3659090740",
  appId: "1:3659090740:web:98402630279ce9320d3361",
  measurementId: "G-9TCCW77XEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);