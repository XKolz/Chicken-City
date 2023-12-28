// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 


const firebaseConfig = {
  // apiKey: "AIzaSyArFbLBf07E-V4lZj2P5u927BokEZEh2-E",
  // authDomain: "fullstack-food-project.firebaseapp.com",
  // projectId: "fullstack-food-project",
  // storageBucket: "fullstack-food-project.appspot.com",
  // messagingSenderId: "1064842341436",
  // appId: "1:1064842341436:web:18e50da4988ec081e4a739",
  // measurementId: "G-CXSXW834NZ"
  apiKey: "AIzaSyAnJMBKBivHBk8Cqguvl-fn4DELot2nyRU",
  authDomain: "fraiche-backend.firebaseapp.com",
  projectId: "fraiche-backend",
  storageBucket: "fraiche-backend.appspot.com",
  messagingSenderId: "1065934725773",
  appId: "1:1065934725773:web:b286c2d08b776c312ff8c4",
  measurementId: "G-2QDKDNNMBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { auth , app }