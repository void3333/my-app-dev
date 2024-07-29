import { createRouter, createWebHistory } from 'vue-router';
import InspectionList from '../components/InspectionList.vue';
import InspectionDetail from '../components/InspectionDetail.vue';

const routes = [
    {
        path: '/',
        name: 'InspectionList',
        component: InspectionList
    },
    {
        path: '/inspection/:id',
        name: 'InspectionDetail',
        component: InspectionDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
