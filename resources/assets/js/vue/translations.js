import Vue from 'vue'
import store from './store/index'
import VueI18n from 'vue-i18n'

import en from '../lang/en'
import sv from '../lang/sv'

export default new VueI18n({
    locale: store.getters.getLanguage,
    messages: { en, sv }
})