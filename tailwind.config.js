module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0511F2",
      orange: "#FFA175",
      green: "#45B773",
      hover: "#5cc185",
      beige: "#FFF1E1",
      white: "#FFFFFF",
      grey: "#505050",
      black: "#000000",
    },

    fontFamily: {
      fredoka: "'Fredoka One', cursive",
      roboto: "'Roboto Slab', serif",
    },

    extend: {
      backgroundImage: {
        lokalerherobg: "url('/img/lokaler_hero.png')",
        lokalebannerbg: "url('/img/lokaler_banner.webp')",
        baggrund: "url('/img/food4.webp')",
        menu: "url('/img/menu.png')",
        forsidebg: "url('/img/img5.webp')",
        kontaktbannerbg: "url('/img/img6.webp')",
        kontaktherobg: "url('/img/hero3.webp')",
        forsideherobg: "url('/img/forside_hero1.webp')",
        forsideherobg: "url('/img/forside_hero.webp')",
      },
      cursor: {
        no: "url(/img/no.svg), pointer",
        soundwaves: "url(/img/soundwaves.svg), pointer",
      },
    },
    width: {
      200: "200%",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
