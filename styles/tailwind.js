const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./scenes/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
  theme: {
    screens: {
      "2xl": "1536px",
      "xl": {"max": "1200px"},
      "content": {"max": "1140px"},
      "lg": {"max": "992px"},
      "md": {"max": "768px"},
      "sm": {"max": "640px"}
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#212529",
      gray: "#B7B6C1",
      secondaryGray: "#94958B",
      purple: "#EDDFEF",
      lavender: "#D5CFE1",
      blue: "#007bff",
      lightBlue: "#68ADE0",
      darkBlue: "#004475",
      green: "#60BC4D",
      yellow: "#E2C14B",
      red: "#D75040"
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    extend: {
      width: {
        "34": "8.5rem",
        "104": "26rem",
        "128": "32rem"
      },
      minWidth: {
        "screen-1/5": "20vw"
      },
      maxWidth: {
        "content": "1140px",
        "box": "888px"
      },
      height: {
        "10.5": "2.625rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "58": "14.5rem",
        "76": "19rem"
      },
      minHeight: {
        "desktopMinHeight": "580px"
      },
      maxHeight: {
        "navMenu": `calc(100vh - ${defaultTheme.spacing["20"]})`
      },
      scale: {
        "99": "0.99",
        "97": "0.97"
      },
      transitionDuration: {
        "DEFAULT": "300ms"
      },
      transitionDelay: {
        "350": "350ms",
        "400": "400ms"
      },
      transitionProperty: {
        "width": "width",
        "translateWithWidth": "width translate"
      },
      animation: {
        "spin": "spin 1s linear infinite"
      },
      boxShadow: {
        "white": "0.3rem .3rem 0 rgba(255, 255, 255, 1)"
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem"
      }
    }
  }
}
