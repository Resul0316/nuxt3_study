<template>
      <div class="card col-3 bg-dark text-white movie_card"
      v-for="{ title, overview, vote_average, poster_path, id, index } in movies"
      :key="index">
        <img class="movie-img" :src="baseUrl + poster_path" alt="">
        <div class="movie-content">
        <h5 class="bg-warning text-center mt-3">{{ title }}</h5>
        <p class="movie-overview">{{ overview }}</p>
        <div class="d-flex justify-content-end align-text-bottom">
          <span class="w-25 bg-danger text-center">{{ vote_average }}</span>
          <button @click="singleMovie(id)">Details</button>
        </div>
        </div>
      </div>
</template>

<script setup>
const props = defineProps({ 
    movies: {
        type: Array,
        required: true
    }
 })
const baseUrlRef = ref('https://image.tmdb.org/t/p/w1280')
const baseUrl = computed(() => baseUrlRef.value)

</script>

<style lang="scss" scoped>

</style>