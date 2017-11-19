//Load store, router, translations and directives modules
import store from './store/index'
import router from './router'
import directives from './directives'
import translations from './translations'

const app = new Vue({
    el: '#app',
    store,
    router,
    i18n: translations,
    mounted() {
        //Maker sure to add auth tokens to headers (if existing)
        this.$store.dispatch('addTokenToHeaders')
    }
});