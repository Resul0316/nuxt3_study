
<!-- Pages represent views for each specific route pattern. Every file in the pages/ directory represents 
a different route displaying its content. -->
<template>
<div>
    <h1 class="text-center">Cinema</h1>
    <modalVue v-show="showModal" />
    <AppAlert />
</div>
</template>

<script>
// import modalVue from 'components/modal.vue'

export default {
    // components: { modalVue },
    data() {
        return {
            showModal: false,
        }
    }
}

</script>