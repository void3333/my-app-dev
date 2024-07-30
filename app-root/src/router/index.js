// index.js ou router.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue'; // Layout que inclui o Header
import InspectionList from '../components/InspectionList.vue';
import InspectionDetail from '../components/InspectionDetail.vue';
import Options from '../../src/views/Options.vue';
import Dashboard from '../../src/views/Dashboard.vue';

const routes = [
    {
        path: '/',
        component: Layout, // Layout que inclui o Header
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard // Exibe o Dashboard na rota raiz "/"
            },
            {
                path: 'inspections',
                name: 'InspectionList',
                component: InspectionList
            },
            {
                path: 'inspection/:id',
                name: 'InspectionDetail',
                component: InspectionDetail,
                props: true
            },
            {
                path: 'options',
                name: 'Options',
                component: Options
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
