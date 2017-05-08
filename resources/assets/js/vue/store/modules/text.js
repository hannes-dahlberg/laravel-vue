import text from '../../../api/text'

export default {
    state: {
        texts: []
    },
    actions: {
        getTexts({ state }) {
            return new Promise((resolve, reject) => {
                text.index().then(texts => {
                    state.texts = texts
                    resolve()
                }).catch(error => reject(error))
            })
        },
        getText({}, textName) {
            return new Promise((resolve, reject) => {
                text.show(textName).then(text => {
                    resolve(text)
                }).catch(error => reject(error))
            })
        },
        updateText({ state }, payload) {
            return new Promise((resolve, reject) => {
                text.update(payload.textId, payload.data).then(() => {
                    resolve()
                }).catch(error => reject(error))
            })
        }
    },
    getters: {
        getTexts(state) {
            return state.texts
        }
    }
}