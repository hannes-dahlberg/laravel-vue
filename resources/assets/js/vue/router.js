import VueRouter from 'vue-router'

//Middleware
import middleware from './middleware'
import store from './store/index'

//Import components
import index from './templates/index.vue'

import errorIndex from './templates/error/index.vue'
import error404 from './templates/error/404.vue'

import authLogin from './templates/auth/login.vue'
import authLogout from './templates/auth/logout.vue'

import pages from './templates/pages/index.vue'

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if(!to.params.scroll) {
            if($('a[name=\'' + to.name + '\']').length) {
                return { x: 0, y: Math.ceil($('a[name=\'' + to.name + '\']').offset().top - 100) }
            }
        }
    },
    routes: [
        { path: '/', component: index, children: [
            { path: 'login', component: authLogin, name: 'auth.login', beforeEnter: middleware.guest },
            { path: 'logout', component: authLogout, name: 'auth.logout', beforeEnter: middleware.auth },
            { path: '/home', component: pages, name: 'home', hash: 'home' },
            { path: '/about', component: pages, name: 'about', hash: 'about' },
            { path: '/contact', component: pages, name: 'contact', hash: 'contact' },
        ], beforeEnter: GuardsCheck([middleware.invalidRoute]) }
    ]
})

/*These two functions help nest multiple middleware. Got it from:
https://github.com/vuejs/vue-router/issues/721#issuecomment-252181948
with credit to Johanderson Mogollon (https://github.com/sonic182)
*/
function operate (guards, from, to, lastNext, i) {
    let guard = guards[i]
    if (guards.length === i + 1) {
        guard(from, to, lastNext)
    } else {
        guard(from, to, function (nextArg) {
            switch (typeof (nextArg)) {
                case 'undefined':
                    operate(guards, from, to, lastNext, i + 1)
                    break
                case 'object':
                    lastNext(nextArg)
                    break
                case 'boolean':
                    lastNext(nextArg)
                    break
                case 'string':
                    lastNext(nextArg)
                    break
            }
        })
    }
}
function GuardsCheck (ListOfGuards) {
    return function (from, to, next) {
        operate(ListOfGuards, from, to, next, 0)
    }
}

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if(error.response.status == 401) {
        store.dispatch('logout')
        router.push({ name: 'home' })

    }
})

export default router