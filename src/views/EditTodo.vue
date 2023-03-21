<template>
    <Alert
        v-bind="alert"
        @close="alert.show = false"
    />

    <Form
        v-if="todo !== null"
        v-model:title="todo.title"
        v-model:description="todo.description"
        v-model:date="todo.date"
        @submit="submitTodo"
    />
</template>

<script setup>
import Alert from '../components/Alert.vue';
import { useAlert } from '../composables/alert.js';
import { useFetch } from '../composables/fetch.js';
import Form from '../components/Form.vue';
import axios from 'axios';
import { router } from '../routes';

const { alert, showAlert } = useAlert()
const props = defineProps(['id']);

const { data:todo, isLoading } = useFetch(`/api/todos/${props.id}`, {
    onError: () => {
        showAlert('La base de datos no está disponible');
    }
});

async function submitTodo(){

    if(todo.value.title === '' || todo.value.description === ''){
        showAlert('Todos los campos son necesarios', {variant:'warning'})
        return
    }

    try{
        await axios.put(`/api/todos/${props.id}`, todo.value)
        router.push('/')
    } catch (e){
        showAlert('La base de datos no está disponible');
    }
}

</script>