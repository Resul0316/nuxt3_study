<template>
    <img class="movie-img" :src="baseUrl + movie.poster_path" alt="" width="300">
    <div class="movie-content">
    <h5 class="bg-warning text-center mt-3">{{ movie.title }}</h5>
    <p class="movie-overview">{{ movie.overview }}</p>
    <div class="d-flex justify-content-end align-text-bottom">
        <span class="w-25 bg-danger text-center">{{ movie.vote_average }}</span>
        <Button type="primary" @click="singleMovie(movie.id)" />
    </div>
    </div>  
</template>

<script setup>
const props = defineProps({ 
    movie: {
        type: Array,
        required: true
    }
 })

 function singleMovie (id) {
    const router = useRouter();
    router.push(`/posts/${id}`)
}

 const baseUrlRef = ref('https://image.tmdb.org/t/p/w1280')
 const baseUrl = computed(() => baseUrlRef.value)
</script>