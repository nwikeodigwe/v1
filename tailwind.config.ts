const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Calibre",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          "SF Mono",
          "Fira Code",
          "Fira Mono",
          "Roboto Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        background: "#0a192f",
        brand: {
          50: "#dcf3ff",
          100: "#aed7ff",
          200: "#7dbdff",
          300: "#4aa3ff",
          400: "#1a88ff",
          500: "#006fe6",
          600: "#0056b4",
          700: "#003d82",
          800: "#002551",
          900: "#000d21",
        },
        secondary: {
          50: "#fff1da",
          100: "#ffd8ae",
          200: "#ffc07d",
          300: "#ffa74c",
          400: "#ff8e1a",
          500: "#e67400",
          600: "#b45a00",
          700: "#814000",
          800: "#4f2600",
          900: "#112240",
        },
        gray: {
          50: "#f5f5f5",
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#737373",
          600: "#595959",
          700: "#282828",
          800: "#262626",
          900: "#120b0d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
