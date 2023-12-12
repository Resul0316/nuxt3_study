<template>
    <div class="mt-5">
        <div class="col-4">
            <h4 class="bg-warning d-flex justify-content-center">Add Comment</h4>
        </div>
        <form @submit.prevent="addTodo()">
            <input v-model="newTodo" name="newTodo" autocomplete="off">
            <button @click="addTodo()"> Add Comment</button>
        </form>
    </div>

    <h4 class="mt-3">To do list</h4>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">
            <span>{{ todo.content }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">

interface Todo {
    id: number,
    content: string,
}

const newTodo = ref<string>('');
const todos = ref<Todo[]>([]);

function addTodo () {
    if (newTodo.value) {
        todos.value.push({
            id     : newTodo.value.length + 1,
            content: newTodo.value
        })
        newTodo.value = '';
    }
}

</script>