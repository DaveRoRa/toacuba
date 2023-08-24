import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "575px",
      md: "767px",
      lg: "992px",
      xl: "1200px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-200": "#dcd3bf",
        "primary-400": "#c1b495",
        "primary-500": "#a79770",
        "primary-600": "#9b8a60",
        "disabled-400": "#E1E8EC",
        "disable-700": "#ADBAC6",
      },
    },
  },
  plugins: [],
};
export default config;
