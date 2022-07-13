import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
