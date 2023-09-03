import type { AppProps } from "next/app";

import wrapper from "@/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import App from "@/components/App";
import Main from "@/components/Main";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Open_Sans } from "@next/font/google";
import localFont from "@next/font/local";
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
const roobert = localFont({
  src: [
    {
      path: "../../public/fonts/Roobert-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roobert-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roobert-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roobert-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roobert-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roobert",
});
import "@/styles/globals.css";

import routeGroups from "@/assets/config/routeGroups.json";
import useAuth from "@/hook/useAuth";

const AppPage = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { route } = useRouter();
  const { mainRoutes } = routeGroups;

  const user = useAuth();

  if (user) {
    localStorage.setItem("userToken", user.accessToken);
  }

  const isMainRoute = !!~mainRoutes.indexOf(route);

  return (
    <Provider store={store}>
      <App className={`${openSans.variable} ${roobert.variable} font-sans`}>
        {isMainRoute && <AppHeader />}

        <Main>
          <Component {...props} />
        </Main>

        {isMainRoute && <AppFooter />}
      </App>
    </Provider>
  );
};

export default AppPage;
