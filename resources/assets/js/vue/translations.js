import vuexI18n from 'vuex-i18n'
import store from './store/index'

Vue.use(vuexI18n.plugin, store);

import en from '../lang/en'
import sv from '../lang/sv'

Vue.i18n.add('en', en);
Vue.i18n.add('sv', sv);

Vue.i18n.set(store.getters.getLanguage);