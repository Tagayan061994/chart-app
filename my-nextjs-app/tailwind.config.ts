import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-open_sans)"],
        roobert: ["var(--font-roobert)"],
      },
      keyframes: {
        ripple: {
          to: {
            transform: "scale(4)",
          },
        },
        "progress-circular-rotate": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "progress-circular-dash": {
          "0%": {
            strokeDasharray: "1, 200",
          },
          "50%": {
            strokeDasharray: "100, 200",
            strokeDashoffset: "-15px",
          },
          "100%": {
            strokeDasharray: "100, 200",
            strokeDashoffset: "-124px",
          },
        },
      },
      animation: {
        ripple: "ripple 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        "progress-circular-rotate":
          "progress-circular-rotate 1.4s linear infinite",
        "progress-circular-dash":
          "progress-circular-dash 1.4s ease-in-out infinite",
      },
      boxShadow: {
        "card-shadow": "0px 0px 10px rgba(0, 0, 0, 0.1)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      primary: "#009E79",
      secondary: "#33436B",
      accent: "#18C39B",
      info: "",
      success: "",
      warning: "#F6C77D",
      error: "#C25454",
      "background-primary": "#FBFBFB",
      "chip-default-background": "#b2dfdb29",
      white: "#FFFFFF",
      gray: "#68789F",
      divider: "rgba(178, 223, 219, 0.8)",
      "select-divider": "rgba(84, 101, 142, 0.1)",
      "light-blue": "#54658E",
      "dark-blue": "#222835",
      "light-green": "#B2DFDB",
      "lighter-green": "#b2dfdb4d",
      "light-orange": "rgba(246, 199, 125, 0.16)",
      "light-gray": {
        100: "rgba(245, 245, 245, 1)",
        200: "rgba(225, 225, 225, 1)",
        300: "rgba(185, 185, 185, 1)",
      },
      "icon-hover": {
        primary: "rgba(0, 158, 121, 0.1)",
        secondary: "rgba(51, 67, 107, 0.1)",
        "light-blue": "rgba(84, 101, 142, 0.1)",
        white: "#ffffff4d",
        default: "rgba(34, 40, 53, 0.1)",
      },
      "ripple-light": "rgba(0, 0, 0, 0.5)",
      "ripple-dark": "rgba(255, 255, 255, 0.5)",
    },
  },
  plugins: [],
};
export default config;
