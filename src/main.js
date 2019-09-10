import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import { routerMode } from './config/env'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
        routes,
        mode: routerMode,
        strict: process.env.NODE_ENV !== 'production',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                if (from.meta.keepAlive) {
                    from.meta.savedPosition = document.body.scrollTop;
                }
                return { x: 0, y: to.meta.savedPosition || 0 }
            }
        },

    })
    /* router.beforeEach((to, from, next) => {
        if (to.matched.some(item => item.meta.requiresPath)) {
            next({ path: '/login' })
        } else {
            next()
        }

	}) */

new Vue({
    router,
    store,
    watch: {
        '$route' (to, from) {


            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}).$mount('#app')