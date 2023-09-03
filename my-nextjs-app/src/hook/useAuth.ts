import { useEffect, useState } from "react";

import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user) {
          setUser(user);
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
