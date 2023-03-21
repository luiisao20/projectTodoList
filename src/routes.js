import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AddTodo from './views/AddTodo.vue';
import About from './views/About.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/addtodo',
        component: AddTodo
    },
    {
        path: '/about',
        component: About
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