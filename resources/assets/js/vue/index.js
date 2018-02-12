//Load store, router, translations and directives modules
import store from './store/index'
import router from './router'
import directives from './directives'
import translations from './translations'

import VueLoading from 'vuex-loading'
Vue.use(VueLoading)

const app = new Vue({
    el: '#app',
    store,
    router,
    i18n: translations,
    vueLoading: new VueLoading({ useVuex: true, moduleName: 'loading', componentName: 'v-loading', className: 'v-loading' }),
    mounted() {
        //Maker sure to add auth tokens to headers (if existing)
        this.$store.dispatch('addTokenToHeaders')
    }
});