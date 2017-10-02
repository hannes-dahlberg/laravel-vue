export default {
    //Get the loading state of the app
    isAppLoading: (state) => {
        return state.appLoading
    },
    getMenu: (state, getters) => {
        return state.menu.concat(getters.isAuth ? state.authMenu : state.guestMenu)
    },
    getLanguage: (state) => {
        //If no language is set, use default
        if(!state.currentLanguage) {
            state.currentLanguage = state.defaultLanguage
        }

        return state.currentLanguage
    },
    //Read from local storage
    readLocalStorage: () => (key) => {
        return JSON.parse(localStorage.getItem(key))
    }
}