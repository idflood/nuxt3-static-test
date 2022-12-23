<template>
  <div><NuxtLink to="/">Back to list</NuxtLink></div>
  <div>
    <h1>{{ data.pokemon_v2_pokemon_by_pk.name }}</h1>
    <div>Height: {{ data.pokemon_v2_pokemon_by_pk.height }}</div>
    <div>Width: {{ data.pokemon_v2_pokemon_by_pk.weight }}</div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const GqlInstance = useGql()

const data = await GqlInstance('pokemon_v2_pokemon_by_pk', { id: route.params.id })
const pokemon = data?.pokemon_v2_pokemon_by_pk

</script>
