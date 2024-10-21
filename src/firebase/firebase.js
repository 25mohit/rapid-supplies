// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoFWn0Uw_yyeLW_LFimAF8n1L2MkzmlsA",
  authDomain: "assignment-d07ac.firebaseapp.com",
  projectId: "assignment-d07ac",
  storageBucket: "assignment-d07ac.appspot.com",
  messagingSenderId: "1076887899301",
  appId: "1:1076887899301:web:a0afdd38ec5746af7e114c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)