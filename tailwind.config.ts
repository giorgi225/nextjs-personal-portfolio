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
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        neutral: "rgb(var(--neutral))",
      },
      fontFamily: {
        primary:   ['var(--font-montserrat)'], // for titles
        secondary: ['var(--font-poppins)'], // for descriptions, buttons...
      },
    },
  },
  plugins: [],
};
export default config;
