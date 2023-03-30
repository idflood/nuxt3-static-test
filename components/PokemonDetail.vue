<template>
    <div><NuxtLink to="/">Back to list</NuxtLink></div>
    <div>
      <h1>{{ data.pokemon_v2_pokemon_by_pk.name }}</h1>
      <div>Height: {{ data.pokemon_v2_pokemon_by_pk.height }}</div>
      <div>Width: {{ data.pokemon_v2_pokemon_by_pk.weight }}</div>
    </div>
  </template>

  <script lang="ts" setup>
  import { hash } from "ohash";

  const route = useRoute()
  const GqlInstance = useGql()

  const operation = 'pokemon_v2_pokemon_by_pk'
  const variables = {
    id: route.params.slug[1]
  }
  const key = hash({operation, variables})
  const {data} = await useAsyncData(key, () => GqlInstance(operation, variables))

  </script>
