export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "awesome-transitions",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  pageTransition: {
    name: "global",
    mode: "out-in",
    beforeLeave() {
      const tp = document.querySelector(".div_top");
      const btm = document.querySelector(".div_bottom");
      tp.classList.add("translate-default");
      btm.classList.add("translate-default");

      console.log(tp);
      console.log(btm);
    },

    // enter() {
    //   const tp = document.querySelector(".div_top");
    //   const btm = document.querySelector(".div_bottom");
    //   tp.classList.remove("translate-default");
    //   btm.classList.remove("translate-default");
    //   tp.classList.add("translate-y-t");
    //   btm.classList.add("translate-y-b");
    // },

    afterEnter() {
      const tp = document.querySelector(".div_top");
      const btm = document.querySelector(".div_bottom");
      tp.classList.remove("translate-default");
      btm.classList.remove("translate-default");
      tp.classList.add("translate-y-t");
      btm.classList.add("translate-y-b");
    },
  },

  server: {
    host: "0",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`~/assets/scss/main.scss`, `animate.css/animate.min.css`],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
