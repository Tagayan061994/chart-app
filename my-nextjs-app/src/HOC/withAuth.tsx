import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent: React.ElementType) => {
  const WithAuthWrapper = (props: any) => {
    const Router = useRouter();
    const token =
      typeof window !== "undefined" ? localStorage.getItem("userToken") : null;

    useEffect(() => {
      if (!token) {
        Router.replace("/sign-in");
      }
    }, [token, Router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthWrapper;
};

export default withAuth;
