// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
          title: `${process.env.PAGE_NAME} — ${process.env.PAGE_SLOGAN}`
      }
    },

    modules: [
        "@nuxtjs/strapi"
    ],

    runtimeConfig: {
        strapi: {
            url: process.env.STRAPI_URL
        },
        public: {
            strapi: {
                url: process.env.STRAPI_URL
            }
        }
    },

    strapi: {
        prefix: process.env.STRAPI_PREFIX
    },

    css: ['~/assets/css/main.scss'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
