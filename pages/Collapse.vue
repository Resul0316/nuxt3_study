<template>
    <a-collapse v-model:activeKey="activeKey" v-for="(el, index) in arr" :key="index">
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ el.a }}</p>
      </a-collapse-panel>
    </a-collapse>
  </template>
  <script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  
  export default defineComponent({
    setup() {
      const arr = [
        {a: 'A dog is a type of domesticated animal', key: 1},
        {a: 'A cat is a type of domesticated animal', key: 2},
        {a: 'A tutle is a type of domesticated animal', key: 3},
        {a: 'A chicken is a type of domesticated animal', key: 4}
      ]
      const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.`;
      const activeKey = ref(['1']);
  
      watch(activeKey, val => {
        console.log(val);
      });
  
      return {
        text,
        activeKey,
      };
    },
  });
  </script>