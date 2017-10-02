import Vue from 'vue'
import store from './store/index'
import VueI18n from 'vue-i18n'

import en from '../lang/en'

const translations = { en }

Vue.use(VueI18n)
Vue.config.lang = store.getters.getLanguage
Object.keys(translations).forEach(function (lang) {
  Vue.locale(lang, translations[lang])
})