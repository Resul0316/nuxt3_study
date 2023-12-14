// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ['@nuxtjs/axios']
  modules: [
    '@ant-design-vue/nuxt',
    // '@nuxtjs/axios',
    "@pinia/nuxt"
  ],
  antd:{
    // Options
  },
  css: [
    '~/css/movie.css',
    'antd/dist/reset.css'
  ],
})
