import {Auth, authPayload} from '../../../api/auth'

declare var axios: any
declare var Echo: any
declare var window: any

type state = {
    login: boolean,
    user: string,
    token: string
}

export default {
    state: <state>{
        login: <boolean>false,
        user: <string>null,
        token: <string>null
    },
    mutations: {
        setAuth(state: state, payload: { user: string, token: string }) {
            state.login = true
            state.user = payload.user
            state.token = payload.token
        },
        setLogoutState(state: state) {
            state.login = false
            state.user = null
            state.token = null
        }
    },
    actions: {
        auth({ commit, dispatch }: { commit: any, dispatch: any }, payload: authPayload) {
            return new Promise((resolve, reject) => {
                Auth.auth(payload).then((response: any) => {
                    //Call to set auth values
                    commit('setAuth', { user: response.user, token: response.token['access_token'] })
                    dispatch('addTokenToHeaders')

                    resolve()
                }).catch((error: Error) => reject(error))
            })
        },
        socialAuth({ commit, dispatch }: { commit: any, dispatch: any}, routeQuery: { driver: string, code: string }) {
            if(!routeQuery.driver) { return }
            return new Promise((resolve, reject) => {
                Auth.socialAuth(routeQuery.driver + '/callback?code=' + routeQuery.code).then((response: any) => {
                    //Call to set auth values
                    commit('setAuth', { user: response.user, token: response.token })
                    dispatch('addTokenToHeaders')

                    resolve()
                }).catch((error: Error) => reject(error))
            })
        },
        addTokenToHeaders({ getters }: { getters: any }) {
            if(!getters.getToken) { return; }
            //Setting the Echo header to include token needed when listening on private channels
            if(window.Echo) {
                Echo.connector.options.auth.headers['Authorization'] = 'Bearer ' + getters.getToken
            }

            //Setting axios default header to include token for any future requests
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getters.getToken
        },
        logout({ commit }: { commit: any }) {
            commit('setLogoutState')
        }
    },
    getters: {
        isAuth: (state: state) => {
            return state.login
        },
        getUser: (state: state) => {
            return state.login ? state.user : null
        },
        getToken: (state: state) => {
            return state.login ? state.token : null
        }
    }
}
