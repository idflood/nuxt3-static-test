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
import { hash } from "ohash";
const GqlInstance = useGql()

const operation = 'pokemon_v2_pokemon'
const variables = {
  limit: 20,
  offset: 0
}
const key = hash({operation, variables})

const {data, error} = await useAsyncData(key, () => GqlInstance(operation, variables))
</script>
