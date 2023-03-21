<template>
    <Alert 
        v-bind="alert" 
        @close="alert.show = false" 
    />
    <!-- Seccion de todos -->
    <section>
        <div class="form">
            <Todo 
                v-if="!isLoading"
                v-for="todo in todos" 
                :title="todo.title" 
                :date="todo.date" 
                :description="todo.description"
                @remove="removeTodo(todo.id)" 
                @edit="$router.push(`/todos/${todo.id}/edit`)" 
            />
            <Spinner 
                v-else
                class="spinner"
            />
        </div>
    </section>
</template>

<script setup>
import Alert from '../components/Alert.vue';
import Todo from '../components/Todo.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { useFetch } from '../composables/fetch.js';
import { useAlert } from '../composables/alert.js';
import axios from 'axios';
import Spinner from '../components/Spinner.vue';

const { alert, showAlert } = useAlert();

const { data: todos, isLoading } = useFetch('/api/todos', {
    onError: () => {
        showAlert('La base de datos está caída :(')
    }
})

async function removeTodo(id) {
    await axios.delete(`/api/todos/${id}`);
    todos.value = todos.value.filter((todo) => todo.id !== id)
}

</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
}
.spinner{
    margin-left: 80px;
    margin-top: 80px;
}
</style>