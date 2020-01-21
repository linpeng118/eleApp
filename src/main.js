import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import { routerMode } from './config/env'
import './config/rem'
import FastClick from 'fastclick'
import VueI18n from 'vue-i18n' //i18n语言切换

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueI18n) // 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh-CN', // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./common/lang/zh'), // 中文简体语言包
        'en-US': require('./common/lang/en'), // 英文语言包
        'tw-CN': require('./common/lang/tw'), // 中文繁体语言包
    }
})

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
router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.requireLogin) && !sessionStorage.user_message) {
        next({ path: '/login' })
    } else {
        next()
    }

})

new Vue({
    i18n,
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