import Vue from 'vue'
import VueI18n from 'vue-i18n'

const translations = {
    'en': {
        'brand': 'Laravel-Vue',
        'menu': {
            'home': 'Home',
            'login': 'Login',
            'logout': 'Logout',
            'template': {
                'template': 'TEMPLATE'
            }
        }
    }
}

Vue.use(VueI18n)
Vue.config.lang = 'en'
Object.keys(translations).forEach(lang => {
    Vue.locale(lang, translations[lang])
})