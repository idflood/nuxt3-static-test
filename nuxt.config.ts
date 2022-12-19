// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  experimental: {
    payloadExtraction: true,
  },

  modules: ['nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      GQL_HOST: 'https://beta.pokeapi.co/graphql/v1beta',
    },
  },
})
