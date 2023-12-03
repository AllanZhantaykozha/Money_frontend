import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenDark: "#015F43",
        greenBasic: "#00875F",
        greenLight: "#00B37E",
        redDark: "#AA2834",
        redBasic: "#F75A68",
        gray1: "#121214",
        gray2: "#202024",
        gray3: "#29292E",
        gray4: "#323238",
        gray5: "#7C7C8A",
        gray6: "#C4C4CC",
        gray7: "#E1E1E6",
        gray8: "#8D8D99",
        modalBg: "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
export default config;
