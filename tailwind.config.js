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

    fontFamily: {
      fredoka: "'Fredoka One', cursive",
      roboto: "'Roboto Slab', serif",
    },

    extend: {
      backgroundImage: {
        lokalerherobg: "url('/img/lokaler_hero.png')",
        lokalebannerbg: "url('/img/lokaler_banner.webp')",
        kontaktbannerbg: "url('/img/img6.webp')",
        menu: "url('/img/menu.png')",
        forsidebg: "url('/img/img5.webp')",
        forsideherobg: "url('/img/hero1.webp')",
        kontaktherobg: "url('/img/hero3.webp')",
      },
    },
    width: {
      200: "200%",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
