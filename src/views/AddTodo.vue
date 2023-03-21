<template>
    <Alert 
        v-bind="alert" 
        @close="alert.show = false" 
    />
    <Form
        v-model:title="todo.title"
        v-model:description="todo.description"
        v-model:date="todo.date"
        @submit="submitTodo"
        :isLoading="isPostingTodo"
    />
</template>
<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import Alert from '../components/Alert.vue';
import { useAlert } from '../composables/alert.js';
import { useRouter } from 'vue-router';
import Form from '../components/Form.vue';

const todo = reactive({
    title: '',
    description: '',
    date: ''
})
const isPostingTodo = ref(false)

const { alert, showAlert } = useAlert()
const router = useRouter();

async function submitTodo() {

    if(todo.title === '' || todo.description === '' || todo.date == ''){
        showAlert('Todos los campos son necesarios', {variant:'warning'})
        return
    }

    isPostingTodo.value = true

    try{
        const res = await axios.post('/api/todos', {
        title: todo.title,
        description: todo.description,
        date: todo.date
        });
        isPostingTodo.value = false
        router.push('/')    
    } catch {
        showAlert('La base de datos no está disponible...')
    }

}

</script>
<style scoped>
</style>