// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqUOBoKPu1xaK14pNuNpF-eR1u49CsJVA",
  authDomain: "cekpisang-9089e.firebaseapp.com",
  databaseURL: "https://cekpisang-9089e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cekpisang-9089e",
  storageBucket: "cekpisang-9089e.appspot.com",
  messagingSenderId: "761898885327",
  appId: "1:761898885327:web:0825a55f0ba26751ea97ba",
  measurementId: "G-0LXYJRLHQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);