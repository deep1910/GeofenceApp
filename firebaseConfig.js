// Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
import { initializeApp } from '@react-native-firebase/app'
// import { getAnalytics } from "firebase/analytics";
// import * from firebase;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtNURWGeqk2d2rocCrU3Xvesu-bkITUzI",
  authDomain: "mygeofence-90189.firebaseapp.com",
  projectId: "mygeofence-90189",
  storageBucket: "mygeofence-90189.appspot.com",
  messagingSenderId: "1049885141110",
  appId: "1:1049885141110:web:7cc2f8dc5855ee5885d757",
  measurementId: "G-G3MCYW5YM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   }

export default app;