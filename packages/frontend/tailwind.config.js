// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        purple: {
          950: "#784ffe",
          920: "#6438f5",
        },
        gray: {
          750: "#202a30",
        },
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "none" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "pulse-fast": "pulse 6.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "smooth-appear": "appear 0.5s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [],
};
