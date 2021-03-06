export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    // Language
    htmlAttrs: {
      lang: 'en'
    },

    // Title related
    title: 'Welcome',
    titleTemplate: "%s - Rushy's Kingdom",

    // Meta tags
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Rushy's Kingdom is a furry server designed with fun, freedom, and diversity in mind. Whoever and whatever you are, Rushy's Kingdom encourages you to show your true colors and be yourself! Enter the kingdom and become a part of this welcoming family of interesting characters. We encourage you to join us  and make some awesome and interesting memories with us."
      }
    ],

    // Favicon
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  // loadingIndicator: {
  //   name: 'cube-grid',
  //   color: '#fff',
  //   background: 'linear-gradient(152deg, #9b9be0 38%, #00d4ff 100%)'
  // },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-discord-message.js', mode: 'client', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-purgecss', '@nuxtjs/sitemap'],
  /*
   ** PurgeCSS config
   */
  purgeCSS: {
    // whitelist: ['defaults-and-this-class']
    whitelistPatterns: [/active/, /fade/, /enter/, /leave/, /discord/]
  },
  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: 'https://furrykingdom.xyz',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // Necessary for CSS Purge
    extractCSS: true,

    //  Remove console.log everywhere
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    // eslint-disable-next-line no-unused-vars
    extend(config, { isClient }) {
      // if (isClient) {
      //   config.devtool = "source-map";
      // }
    }
  }
}
