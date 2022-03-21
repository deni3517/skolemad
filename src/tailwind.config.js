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

    fontSize: {
      'size-h1': '6.25rem',
      'size-h2': '5rem',
      'size-h3': '2.5rem',
      'size-p': '1.125rem',
      'size-button': '1.875rem',
      'size-nav': '1.875rem',
    }

    // fontFamily: {
    //   fredoka: "'Fredoka One', cursive",
    //   roboto: "'Roboto Slab', serif",
    // },

    // extend: {
    //   backgroundImage: {
    //     lokalerherobg: "url('/img/lokaler_hero.png')",
    //     lokalebannerbg: "url('/img/lokaler_banner.webp')",
    //     baggrund: "url('/img/baggrund.png')",
    //     menu: "url('/img/menu.png')",
    //     forsidebg: "url('/img/img5.webp')",
    //     kontaktbannerbg: "url('/img/img6.webp')",
    //     kontaktherobg: "url('/img/hero3.webp')",
    //     forsideherobg: "url('/img/forside_hero1.webp')",
    //     forsideherobg: "url('/img/forside_hero.webp')",
    //   },
    //   cursor: {
    //     no: "url(/img/no.svg), pointer",
    //     soundwaves: "url(/img/soundwaves.svg), pointer",
    //   },
    // },
    // width: {
    //   200: "200%",
    // },
  },
  // plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
