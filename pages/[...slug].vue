<template>
  <div>
    <AllPokemons v-if="!isDetailPage" />
    <PokemonDetail v-else />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const slug = computed(() => {
    return route.params.slug
})

const isDetailPage = computed(() => {
    return slug.value?.length === 2
})
</script>
