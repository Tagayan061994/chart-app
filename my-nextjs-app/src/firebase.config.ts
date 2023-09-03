// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-PEZAaYDYHGeyATTUl9IE6aWwjW3D7q0",
  authDomain: "chartstodos.firebaseapp.com",
  projectId: "chartstodos",
  storageBucket: "chartstodos.appspot.com",
  messagingSenderId: "110680529121",
  appId: "1:110680529121:web:5ca0686ff61eb239f6ffa0",
  measurementId: "G-RRV4T9D61W",
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// if (!app) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default firebase;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
