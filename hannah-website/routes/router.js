import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../src/views/home.vue')
    },

    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../src/views/projects.vue')
    },

    {
        path: '/resume',
        name: 'Resume',
        component: () => import('../src/views/resume.vue')
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
