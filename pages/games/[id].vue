<template>
    <h1>Game Page</h1>
    <p>{{ game }}</p>
</template>

<script setup>
const route = useRoute();

const { error, data: game } = await useFetch(`https://api.sampleapis.com/xbox/games/${route.params.id}`);
if(error.value) {
    showError(Object.assign(error.value, {fatal: true}))
}

</script>