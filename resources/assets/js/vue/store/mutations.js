export default {
    //Set the loading state of the app
    setLoading(state, loading) {
        state.appLoading = loading
    },
    //Set the current language
    setLanguage(state, lang) {
        state.currentLanguage = lang
        Vue.i18n.set(lang)
    }
}