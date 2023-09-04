import { useEffect, useState } from "react";

const useCheckToken = () => {
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsTokenPresent(true);
    } else {
      setIsTokenPresent(false);
    }
  }, []);

  return isTokenPresent;
};

export default useCheckToken;
