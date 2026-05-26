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
        sage: {
          50: "#f4f7f4",
          100: "#e6ede6",
          200: "#cddcce",
          300: "#a8c2aa",
          400: "#7da281",
          500: "#5a8260",
          600: "#46694c",
          700: "#38543e",
          800: "#2e4433",
          900: "#27392c",
          950: "#121f16",
        },
        cream: {
          50: "#fdfcf8",
          100: "#faf7f0",
          200: "#f5eedc",
          300: "#ede0c4",
        },
        blush: {
          100: "#fdf0ee",
          200: "#f9ddd8",
          300: "#f0b8af",
        },
        gold: {
          300: "#e8c97a",
          400: "#d4a843",
          500: "#b8902a",
        },
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        dm: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
