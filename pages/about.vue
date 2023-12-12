<template>
  <h1>ToDo App</h1>
  <form @submit.prevent="addTodo()">
    <label>New ToDo </label> <br />
    <input v-model="newTodo" name="newTodo" autocomplete="off" />
    <button @click="addTodo()">Add ToDo</button>
  </form>

  <h2>ToDo List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{ todo.content }}</span>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
</template>

 <!-- Composition API -->
<script setup>
const newTodo = ref('')
const defaultData = [
  {
    done: true,
    content: 'To do 1'
  },
  {
    done: false,
    content: 'To do 2'
  }
];
// const { $cookies } = useNuxtApp()
const todosData = /* $cookies.get('todos') || */ defaultData
const todos = ref(todosData)
function addTodo() {
  if (newTodo.value) {
    todos.value.push({
      done: false,
      content: newTodo.value
    })
    newTodo.value = ''
  }
}
function doneTodo(todo) {
  // todo.done = !todo.done
}
function removeTodo(index) {
  todos.value.splice(index, 1)
}
</script>