import { useEffect, useState } from "react";

import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/user";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        dispatch(
          setUser({
            email: user.email,
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuth;
