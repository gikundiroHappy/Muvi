// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFALmV5Uq1xesi_mIa_oFKsUw64NRlh9I",
  authDomain: "muvi-48777.firebaseapp.com",
  projectId: "muvi-48777",
  storageBucket: "muvi-48777.appspot.com",
  messagingSenderId: "853454785589",
  appId: "1:853454785589:web:baf0fb0443eca8d01eb57c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);