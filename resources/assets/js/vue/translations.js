import Vue from 'vue'
import VueI18n from 'vue-i18n'

const translations = {
    'en': {
        'brand': 'DWIK',
        'menu': {
            'home': 'Home',
            'about': 'About Us',
            'contact': 'Contact',
            'logout': 'Logout',
            'auth': {
                'login': 'Login',
                'logout': 'Logout'
            }
        }
    }
}

Vue.use(VueI18n)
Vue.config.lang = 'en'
Object.keys(translations).forEach(lang => {
    Vue.locale(lang, translations[lang])
})