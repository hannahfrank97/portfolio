import { createRouter, createWebHistory } from 'routes';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import('../views/home.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;