<template>
  <div>
    <h2>All pokemons</h2>

    <p>Fetched {{ data?.pokemon_v2_pokemon?.length || 0 }} pokemons</p>

    <div v-for="(entry, i) of data?.pokemon_v2_pokemon" :key="entry.id">
      <h3><NuxtLink :to="`/pokemon/${entry.id}`">{{ entry.name }}</NuxtLink></h3>
      <div>{{ entry.height }}</div>
      <div>{{ entry.weight }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const GqlInstance = useGql()

const data = await GqlInstance('pokemon_v2_pokemon', {
  limit: 20,
  offset: 0
})
</script>
