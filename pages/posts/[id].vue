<template>
    <div class="mt-5 ms-3" v-if="movies" :key="index">
        <h3 class=" m-3">{{movies.title}}</h3>
        <a-collapse>
            <a-collapse.panel key="overview" header="Overview">
                <p>{{ movies.overview }}</p>
            </a-collapse.panel>
            <a-collapse-panel key="imbd" header="IMDB">
                <p><span>IMDB:</span>{{ movies.vote_average }}</p>
            </a-collapse-panel>
        </a-collapse>
        <img width="300" class="col-4" :src="baseUrl + movies.poster_path" alt="">
        
        <div class="mt-5">
            <comments />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import comments from '../pages/comments.vue';
export default defineComponent({
    components: {
        comments
    },
    data() {
        const { id } = useRoute().params
        const newTodo = ref('');
        return {
            newCommentText: '',
            id,
            newTodo
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
        // addTodo () {
        //     const newTodo = ref('');
        //     const todos = ref([]);
        //     if (newTodo.value) {
        //         todos.value.push({
        //             id: newTodo.legth + 1,
        //             content: newTodo.value
        //         })
        //         newTodo.value = '';
        //         console.log(todos)
        //     }
        // }
    },
    computed: {
        baseUrl() {
            return "https://image.tmdb.org/t/p/w1280" || ''
  }
    }  
})

</script>