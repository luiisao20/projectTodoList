<template>
    <div class="form">
        <h1>Add Todo</h1>
        <form class="addTodo">
            <label for="">Todo title</label>
            <input v-model="title" type="text" placeholder="Todo Title">
            <label for="">Todo Description</label>
            <input v-model="descr" type="text" placeholder="Todo Description">
            <label for="">Todo Date</label>
            <input v-model="date" type="date" min="2019-01-01" max="2023-03-20">
            <div class="button">
                <button
                    @click.prevent="submitTodo"
                    variant="secondary"
                >
                <i class="fa-sharp fa-solid fa-circle-check" style="color: white;"></i>
            </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const title = ref('');
const descr = ref('');
const date = ref('');

async function submitTodo() {
    const res = await axios.post('/api/todos', {
        title: title.value,
        description: descr.value,
        date: date.value
    })
}

</script>
<style scoped>
.form{
    background-color: var(--navbar-color);
    padding: 20px;
    border-radius: 40px;
}
.addTodo {
    display: flex;
    flex-direction: column;
    font-size: 20px;
}
input {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
}
button{
    background-color: var(--navbar-color);
}
.button{
    text-align: end;
}
.fa-sharp{
    font-size: 40px;
}
</style>