// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAHl1xKuP6DHgTtkJt1D-E6JaDsHNIuhA",
  authDomain: "react-dragon-news-auth-7b9ba.firebaseapp.com",
  projectId: "react-dragon-news-auth-7b9ba",
  storageBucket: "react-dragon-news-auth-7b9ba.appspot.com",
  messagingSenderId: "773366002082",
  appId: "1:773366002082:web:562113c0b4071af84ac2fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;