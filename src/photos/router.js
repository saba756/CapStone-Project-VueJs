import { createRouter, createWebHistory } from "vue-router";
import PhotoApp from "../photos/PhotoApp.vue";
import PhotoView from "../photos/PhotoView.vue"
export const router =createRouter({
    history:createWebHistory(),
    routes: [{
        path: '/',
        component: PhotoApp,
        children:[{
            path: 'albums/:id',
            component: PhotoView,
        }]
    }]
})