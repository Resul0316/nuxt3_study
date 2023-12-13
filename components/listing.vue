
  
<template>
  <a-row :gutter="6">
    <a-col :span="6" v-for="movie in movies" :key="index">
      <Movie :movie="movie"></Movie>
    </a-col>
  </a-row> 
</template>

<script setup>
  const props = defineProps({ 
      movies: {
          type: Array,
          required: true
      }
  })
</script>
