import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "react-portfolio-ujjwal.firebaseapp.com",
  projectId: "react-portfolio-ujjwal",
  storageBucket: "react-portfolio-ujjwal.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
