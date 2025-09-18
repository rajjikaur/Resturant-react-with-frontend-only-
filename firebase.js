// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-gIHoz_NrAyTTeReI8HJ2lMsoA8sYGy0",
  authDomain: "rajjidrinkscorner.firebaseapp.com",
  projectId: "rajjidrinkscorner",
  storageBucket: "rajjidrinkscorner.firebasestorage.app",
  messagingSenderId: "837684453490",
  appId: "1:837684453490:web:493d761c64bafeb9e5e2eb",
  measurementId: "G-K5V3CLZ6WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication export
export const auth = getAuth(app);
