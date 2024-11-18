// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV-WXYVSgoZ5WCUd9T-kVnD_RlGHZaZqs",
  authDomain: "fe-project00.firebaseapp.com",
  databaseURL: "https://fe-project00-default-rtdb.firebaseio.com",
  projectId: "fe-project00",
  storageBucket: "fe-project00.firebasestorage.app",
  messagingSenderId: "57902582777",
  appId: "1:57902582777:web:c056842183d87631c7cb28",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
