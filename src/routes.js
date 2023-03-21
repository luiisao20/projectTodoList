import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AddTodo from './views/AddTodo.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/addtodo',
        component: AddTodo
    }
    // {
    //     path: '/todos/:id/edit',
    //     component: Edit,
    //     props: true
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };