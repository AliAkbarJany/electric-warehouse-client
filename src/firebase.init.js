// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtAmOdur7_xftFlJ5dsNH1wS_tMGGe7L0",
  authDomain: "assignment-11-ca5e6.firebaseapp.com",
  projectId: "assignment-11-ca5e6",
  storageBucket: "assignment-11-ca5e6.appspot.com",
  messagingSenderId: "231179250153",
  appId: "1:231179250153:web:6384476e8f5e0a8c1a8378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth;
