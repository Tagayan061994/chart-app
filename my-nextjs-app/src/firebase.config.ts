import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-PEZAaYDYHGeyATTUl9IE6aWwjW3D7q0",
  authDomain: "chartstodos.firebaseapp.com",
  projectId: "chartstodos",
  storageBucket: "chartstodos.appspot.com",
  messagingSenderId: "110680529121",
  appId: "1:110680529121:web:5ca0686ff61eb239f6ffa0",
  measurementId: "G-RRV4T9D61W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
