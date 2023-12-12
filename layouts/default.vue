<!-- Layouts are wrappers around pages that contain a common User Interface for several pages, 
such as a header and footer display. Layouts are Vue files using <slot /> components to display 
the page content. The layouts/default.vue file will be used by default. Custom layouts can be set 
as part of your page metadata. -->

<!-- The layout name is normalized to kebab-case, so someLayout becomes some-layout. -->

<template>
  <div>
    <nav class="navbar navbar-light bg-dark justify-content-between">
      <a class="navbar-brand text-white">Welcome to Cinema</a>
      <form class="form-inline" >
        <input class="form-control mr-sm-2" type="search" placeholder="Search" @keyup="updateBySearch()" v-model="searchTerm" aria-label="Search">
        <button @click="updateBySearch()">Search</button>
      </form>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const searchMovie = async () => {
      try {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f`
        const response = await $fetch(url);
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
    return {
      searchMovie
    }
  },
  data () {
    return {
      products: [],
      searchTerm: '' 
    }
  },
  methods: {
    async updateBySearch() {
      const query = this.searchTerm 
      try {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query=${query}`
        const response = await $fetch(url);
        
        console.log('response', response)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
</script>


  