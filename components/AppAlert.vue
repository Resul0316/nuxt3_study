<template>
  <div class="container movie">
    <div class="mt-3 d-flex row wrap">
      <listing :movies="movies.results"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import listing from './listing.vue'

type listingMovies = 'sortAsc' | 'sortDesc' | 'none'

interface MoviesINT {
id           : number,
title        : string,
overview     : string,
vote_average : number,
poster_path  : string
}

export default defineComponent({
  components: { listing },
data() {
  const listingMovies = useState<listingMovies>('none')
  const movies = useState(<MoviesINT[]>(() => []))
  return { movies, listingMovies }
},
async setup() {
  const movies = ref<MoviesINT[]>([]);
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f"
  const response = await $fetch<MoviesINT[]>(url)
  movies.value = response
  return {
   movies
  }
},
created() {
  Promise.resolve(this.movies)
  .then((data) => {
    this.movies = this.retrieveMovies(data)
    this.movies = this.sortByDesc(data)

  })
},
methods: {
  retrieveMovies (movies: any):MoviesINT[] {
    return movies?.results?.map((movie: MoviesINT) => {
      // console.log(movie, 'movie')
      return {
            id             : movie.id,
            title          : movie.title,
            overview       : movie.overview,
            vote_average   : movie.vote_average,
            poster_path    : movie.poster_path
      }
    }) || [];
  },
  sortByDesc(movies: any): MoviesINT[] {
    for(let i = 0; i<movies.results.length; i++) {
      for(let j = 0; j<movies.results.length - 1 - i; j++){
        if (movies.results[j].vote_average < movies.results[j + 1].vote_average) {
          let swap = movies.results[j+1]
          movies.results[j+1] = movies.results[j]
          movies.results[j] = swap
        }
      }
    }
    // console.log(movies.results, 'Desc')
    return movies
  },
  async searchMovies () {
    const movies = ref<MoviesINT[]>([]);
    const searchQuery = ref('')
    if (searchQuery.value) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query=${searchQuery.value}`
    const response = await $fetch<MoviesINT[]>(url)
    movies.value = response
    return {
    movies
    }
  }
  },
  singleMovie (id: number){
      this.$router.push(`/posts/${id}`)
    }
},
computed: {
  baseUrl() {
    return "https://image.tmdb.org/t/p/w1280" || ''
  }
}
})
</script>
