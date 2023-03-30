const cachedData = {}
const dataToCache = ['featuredpokemon']

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:rendered', (ssrContext) => {
        dataToCache.forEach((key) => {
            console.log('Caching data for', key)
            if (ssrContext.ssrContext.payload.data[key]) {
                cachedData[key] = ssrContext.ssrContext.payload.data[key]
            }
        })
    })

    nuxtApp.hook('app:created', (vueApp) => {
        dataToCache.forEach((key) => {
            if (cachedData[key]) {
                console.log('Using cached data for', key)
                vueApp.$nuxt.payload.data[key] = cachedData[key]
                vueApp.$nuxt.static.data[key] = cachedData[key]
            }
        })
    })
})
