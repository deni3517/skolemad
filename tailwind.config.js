module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#93C020",
      greenHover: "#C0E563",
      orange: "#FFC466",

      white: "#FFFFFF",
      whiteTransparent: "#hsla(0, 0%, 100%, 0.5)",
      lightGrey: "#F6F6F6",
      darkGrey: "#3A3A3A",
    },

    // fontFamily: {
    //   fredoka: "'Fredoka One', cursive",
    //   roboto: "'Roboto Slab', serif",
    // },

    extend: {
      backgroundImage: {
        forsidehero: "url('/img/food4.webp')",
        loginhero: "url('/img/food29.webp')",
      },
      // cursor: {
      //   no: "url(/img/no.svg), pointer",
      //   soundwaves: "url(/img/soundwaves.svg), pointer",
      // },
    },
    // width: {
    //   200: "200%",
    // },
  },
  // plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
