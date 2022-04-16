// import theme from '@nuxt/content-theme-docs'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  // for local
  target: 'static',
  // for server
  // target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'miyuki nagara',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'developper story and journey',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // css file blog
    '~/assets/css/main.css',
    // font awensome
    '~/node_modules/font-awesome/css/font-awesome.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // font awensome
    // 'plugins/fontawesome.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  docs: {
    primaryColor: '#E24F55',
  },
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
        name: 'Français',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
  },
  buildModules: [
    '@nuxtjs/fontawesome',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ADSENSE_ID || 'UA-172028584-1',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // google analytics
    '@nuxtjs/google-analytics',
    // google adsence
    '@nuxtjs/google-adsense',
    // '@fortawesome/free-solid-svg-icons',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },

  'google-adsense': {
    id: process.env.GOOGLE_ADSENSE_ID || 'ca-pub-8243005452898565',
    onPageLoad: false,
    pageLevelAds: false,
  },

  publicRuntimeConfig: {
    'google-adsense': {
      id: process.env.GOOGLE_ADSENSE_ID || 'ca-pub-8243005452898565',
      test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'false',
    },
  },

  // purge css setting for font awensome
}
