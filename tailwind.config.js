module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      beige: "#FEE8DB",
      green: "#288D61",
    },

    fontFamily: {
      robotoSerif: "'Roboto Serif', serif",
      roboto: "'Roboto', sans-serif",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
