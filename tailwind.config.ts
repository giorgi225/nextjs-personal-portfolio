import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // colorName-number means opacity for example grayDark-30 means opacity 0.3 else it is just numeration
        // White
        "white": "var(--white)",
        // Black
        "black": "var(--black)",
        "black2": "var(--black2)",
        "black-80": "rgba(var(--black-80))",
        // Gray
        "grayLight": "var(--grayLight)",
        "grayLight2": "var(--grayLight2)",
        "grayDark": "var(--grayDark)",
        "grayDark2": "var(--grayDark2)",
        "grayDark-30": "rgba(var(--grayDark-30))",
        // Others
        "success": "var(--success)",
        "orange": "var(--orange)"
      },
      fontSize: {
        "xs": "13px",
        "sm": "14px",
        "base": "16px",
        "md": "18px",
        "xl": "20px",
        "2xl": "36px",
        "3xl": "48px",
        "4xl": "85px",
      },
      fontFamily: {
        "mainBlack-italic": ['main-black-italic', 'sans-serif'],
        "mainBlack": ['main-black', 'sans-serif'],
        "mainBold": ['main-bold', 'sans-serif'],
        "mainMedium": ['main-medium', 'sans-serif'],
        "mainLight": ['main-light', 'sans-serif'],
      },
      screens: {
        '3xl': "1900px"
      },
      backgroundImage: {
        "overlay-50": "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)"
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config
