import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/user";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        if (user) {
          const token = await user.getIdToken();
          localStorage.setItem("userToken", token);
        } else {
          localStorage.removeItem("userToken");
        }
        dispatch(
          setUser({
            email: user.email,
          })
        );
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuth;
