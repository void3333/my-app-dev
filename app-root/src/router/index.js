import {createRouter, createWebHistory} from 'vue-router'
import InspectionList from "@/components/InspectionList.vue";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'inspection-list',
            component: InspectionList
        },
    ],
})

export default router
