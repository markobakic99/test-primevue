import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from '../components/FirstPage.vue';
import SecondPage from '../components/SecondPage.vue';

const routes = [
    {
        path: '/',
        name: 'FirstPage',
        component: FirstPage
    },
    {
        path: '/second',
        name: 'SecondPage',
        component: SecondPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;