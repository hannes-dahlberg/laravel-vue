import auth from '../../../api/auth'

export default {
    state: {
        login: false,
        user: null,
        token: null
    },
    mutations: {
        setAuth(state, payload) {
            state.login = true
            state.user = payload.user
            state.token = payload.token
        },
        setLogoutState(state) {
            state.login = false
            state.user = null
            state.token = null
        }
    },
    actions: {
        auth({ commit, dispatch }, payload) {
            return new Promise((resolve, reject) => {
                auth.auth(payload).then(response => {
                    //Call to set auth values
                    commit('setAuth', { user: response.user, token: response.token['access_token'] })
                    dispatch('addTokenToHeaders')

                    resolve()
                }).catch(error => reject(error))
            })
        },
        socialAuth({ commit, dispatch }, routeQuery) {
            if(!routeQuery.driver) { return }
            return new Promise((resolve, reject) => {
                auth.socialAuth({ url: routeQuery.driver + '/callback?code=' + routeQuery.code }).then(response => {
                    //Call to set auth values
                    commit('setAuth', { user: response.user, token: response.token })
                    dispatch('addTokenToHeaders')

                    resolve()
                }).catch(error => reject(error))
            })
        },
        addTokenToHeaders({ getters }) {
            if(!getters.getToken) { return; }
            //Setting the Echo header to include token needed when listening on private channels
            if(window.Echo) {
                Echo.connector.options.auth.headers['Authorization'] = 'Bearer ' + getters.getToken
            }

            //Setting axios default header to include token for any future requests
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getters.getToken
        },
        logout({ commit }) {
            commit('setLogoutState')
        }
    },
    getters: {
        isAuth: state => {
            return state.login
        },
        getUser: state => {
            return state.login ? state.user : null
        },
        getToken: state => {
            return state.login ? state.token : null
        }
    }
}
