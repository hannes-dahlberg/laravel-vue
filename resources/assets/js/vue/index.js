//Load store, router, translations and directives modules
import store from './store/index'
import router from './router'
import directives from './directives'
import VueI18n from 'vue-i18n'

import en from '../lang/en'

const i18n = new VueI18n({
  locale: store.getters.getLanguage,
  messages: {
      en
  }
})


const app = new Vue({
    el: '#app',
    store,
    router,
    i18n,
    mounted() {
        //Maker sure to add auth tokens to headers (if existing)
        this.$store.dispatch('addTokenToHeaders')
    }
});