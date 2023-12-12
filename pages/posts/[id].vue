<template>
    <div class="mt-5 ms-3" v-if="movies" :key="index">
        <h3 class=" m-3">{{movies.title}}</h3>
        <p>{{ movies.overview }}</p>
        <img class="col-4" :src="baseUrl + movies.poster_path" alt="">
        <!-- <div class="mt-5">
            <h6>Video Page:</h6>
            <video />
        </div> -->
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import video from './video123.vue'
export default defineComponent({
    components: {
        video
    },
    data() {
        const { id } = useRoute().params
        return {
            newCommentText: '',
            id
        }
    },
    async setup () {
        const movies = ref([]);
        const { id }  = useRoute().params
        const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f`
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f`
        const response = await $fetch(url)
        const response2 = await $fetch(videoUrl)
        movies.value = response
        console.log(response2, '2')
        return {
            movies
        }
    },
    created() {
        Promise.resolve(this.movies)
        .then((data) => {
            this.movies = this.singleMovie(data)
        })
    },
    methods: {
        singleMovie(movie) {
            return movie
        },
        addComment () {
            let comArr = [];
            let comment = ''
        }
    },
    computed: {
        baseUrl() {
            return "https://image.tmdb.org/t/p/w1280" || ''
  }
    }  
})

</script>