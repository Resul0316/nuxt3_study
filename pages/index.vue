
<!-- Pages represent views for each specific route pattern. Every file in the pages/ directory represents 
a different route displaying its content. -->
<template>
<div>
    <h1 class="text-center">Cinema</h1>
    <AppAlert />
    <pre>{{ data }}</pre>
</div>
</template>
<script setup>

const { data } = await useFetch('/api/hello')


</script>