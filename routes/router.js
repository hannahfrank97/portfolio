import {createRouter, createWebHashHistory} from 'vue-router';

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

    {
        path: '/projects/OrlandosAdventure',
        name: 'OrlandosAdventure',
        beforeEnter: (to, from, next) => {
            window.location.href = '';
        },
    }


];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
