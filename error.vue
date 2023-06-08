<template>
    <h1 style="font-size: xx-large;">{{ error.statusCode || 'Error' }}</h1>
    <h2 style="font-size: x-large;">{{ error.statusMessage || 'Error desconocido' }}</h2>
  <button @click="handleError">Ir al Inicio</button>
</template>
<script setup>
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>