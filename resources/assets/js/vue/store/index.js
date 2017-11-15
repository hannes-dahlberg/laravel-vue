import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {createVuexLoader} from 'vuex-loading'

const VuexLoading = createVuexLoader({ moduleName: 'loading', componentName: 'v-loading', className: 'v-loading' });
Vue.use(VuexLoading)

//Importing state, actions and getters to use with store
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//Import modules
import auth from './modules/auth'

//Export new Vuex store
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: { auth },
    plugins: [
        createPersistedState(),
        VuexLoading.Store
    ]
})