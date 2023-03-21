<template>
    <Alert 
        v-bind="alert" 
        @close="alert.show = false" 
    />
    <!-- Seccion de todos -->
    <section>
        <div>
            <Todo 
                v-for="todo in todos" 
                :title="todo.title" 
                :date="todo.date" 
                :description="todo.description"
                @remove="removeTodo(todo.id)" 
                @edit="editTodo(todo.id)" 
            />
        </div>

    </section>
</template>

<script setup>
import Alert from '../components/Alert.vue';
import Todo from '../components/Todo.vue'
import { reactive } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import { useFetch } from '../composables/fetch.js';

const alert = reactive({
    show: false,
    message: 'Ola k ase',
    variant: 'info'
})

const { data: todos, isLoading } = useFetch('/api/todos', {
    onError: () => {
        console.log('hola');
        alert.show = true
    }
})

function editTodo(id) {
    console.log(id);
}

function removeTodo(id) {
    console.log(id);
}
</script>