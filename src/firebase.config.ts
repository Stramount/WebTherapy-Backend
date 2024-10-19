// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBgby_JgCSw2mmEbxMEFnzC9HvLM21q0A8",
  authDomain: "webtherapy-db.firebaseapp.com",
  projectId: "webtherapy-db",
  storageBucket: "webtherapy-db.appspot.com",
  messagingSenderId: "453381215611",
  appId: "1:453381215611:web:b057e4896457e91f0399de",
  measurementId: "G-4DT4NW7SFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);
//const analytics = getAnalytics(app);