// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-dIKawe12raU_XS7pUB2Wu9dX_RYdZ8c",
  authDomain: "giga-growth-7d1ff.firebaseapp.com",
  projectId: "giga-growth-7d1ff",
  storageBucket: "giga-growth-7d1ff.appspot.com",
  messagingSenderId: "18427052722",
  appId: "1:18427052722:web:5f2c6ec48b19f13ffd3fab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
