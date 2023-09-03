import React, { useState } from "react";
// import firebase from "../firebase.config";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
    } catch (error) {
      alert(error);
    }
  };

  //   const onSubmit = async (e) => {
  //     e.preventDefault();

  //     await createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user);
  //         navigate("/login");
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //         // ..
  //       });
  //   };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
