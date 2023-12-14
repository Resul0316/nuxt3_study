<!-- Layouts are wrappers around pages that contain a common User Interface for several pages, 
such as a header and footer display. Layouts are Vue files using <slot /> components to display 
the page content. The layouts/default.vue file will be used by default. Custom layouts can be set 
as part of your page metadata. -->

<!-- The layout name is normalized to kebab-case, so someLayout becomes some-layout. -->

<template>
  <div>
    <template>
  <div>
    <a-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="World's best cinema"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/">Movies</NuxtLink></li>
        <li><NuxtLink to="/Login">Login</NuxtLink></li>
        <li><NuxtLink to="/Register">Register</NuxtLink></li>
      </template>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="It is">Giuseppe's Cinema</a-descriptions-item>
      </a-descriptions>
    </a-page-header>
  </div>
</template>
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


  