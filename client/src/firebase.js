// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "ideafest-f8b99.firebaseapp.com",
  projectId: "ideafest-f8b99",
  storageBucket: "ideafest-f8b99.appspot.com",
  messagingSenderId: "74315895865",
  appId: "1:74315895865:web:2150781cf26e9fccc629e8",
  measurementId: "G-RB8EDC94MH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

