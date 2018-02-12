import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

//Importing state, actions and getters to use with store
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//Import modules
import auth from './modules/auth'
import text from './modules/text'

//Export new Vuex store
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: { auth, text },
    plugins: [
        createPersistedState({
            key: process.env.APP_NAME,
            paths: ['auth', 'currentLanguage']
        })
    ]
})