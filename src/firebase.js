import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDG4rkF1TMy-vezCky8vxZcVtcMk0dWiyc",
  authDomain: "react-portfolio-ujjwal.firebaseapp.com",
  projectId: "react-portfolio-ujjwal",
  storageBucket: "react-portfolio-ujjwal.appspot.com",
  messagingSenderId: "922312597160",
  appId: "1:922312597160:web:d37019125547c043dbec9d"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
