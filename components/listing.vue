
  
<template>
  <a-row :gutter="12" flex gap-2>
    <a-col :span="6" flex gap-2 v-for="(movie, index) in movies" :key="index">
      <Movie :movie="movie" />
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
