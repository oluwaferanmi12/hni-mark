import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hblue50: "#E6E6F3",
        hblue100: "#B1B1DA",
        hblue200: "#8B8BC9",
        hblue300: "#5656B0",
        hblue400: "#3535A1",
        hblue500: "#030389",
        hblue600: "#03037D",
        hblue700: "#020261",
        hblue800: "#02024B",
        hblue900: "#01013A",
        hgrey50: "#E7E7E7",
        hgrey100: "#B6B6B6",
        hgrey200: "#929292",
        hgrey300: "#616161",
        hgrey400: "#424242",
        hgrey500: "#131313",
        hgrey600: "#111111",
        hgrey700: "#0D0D0D",
        hgrey800: "#0A0A0A",
        hgrey900: "#080808"
      }
    },
  },
  plugins: [],
};
export default config;
