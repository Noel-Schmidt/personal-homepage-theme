// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
          title: "Nuxt 3 Tailwind Boilerplate"
      }
    },

    css: ['~/assets/css/main.scss'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
