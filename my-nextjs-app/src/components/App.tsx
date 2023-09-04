import { useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/user";

import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

interface AppProps extends React.PropsWithChildren {
  className?: string;
}

const App: React.FC<AppProps> = ({ children, className }) => {
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
  return (
    <div
      className={clsx(
        className,
        "flex flex-auto flex-col min-h-screen max-w-full"
      )}
    >
      {children}
    </div>
  );
};

export default App;
