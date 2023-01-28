<template>
    <div>
        Featured pokemon: {{ data.pokemon_v2_pokemon_by_pk.name }}
    </div>
</template>

<script lang="ts" setup>
const GqlInstance = useGql()

const operation = 'featuredpokemon'
const {data} = await useCachedAsyncData('featuredpokemon', () => GqlInstance(operation, {}))

</script>
