import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*', redirect: `/comments`
        },
        {
            name: 'comments',
            path: '/comments',
            component: () => import('./views/Comments.vue'),
        },
    ]
})