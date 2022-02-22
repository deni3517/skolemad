module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0511F2",
      orange: "#FFA175",
      green: "#45B773",
      beige: "#FFF1E1",
      white: "#FFFFFF",
      grey: "#505050",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
