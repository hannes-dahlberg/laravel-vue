export default {
    index() {
        return new Promise((resolve, reject) => {
            axios.get('/api/text').then(response => {
                resolve(response.data)
            }).catch(error => reject(error))
        })
    },
    show(textName) {
        return new Promise((resolve, reject) => {
            axios.get('/api/text/' + textName).then(response => {
                resolve(response.data)
            }).catch(error => reject(error))
        })
    },
    update(textId, data) {
        return new Promise((resolve, reject) => {
            axios.put('/api/text/' + textId, data).then(response => {
                resolve()
            }).catch(error => reject(error))
        })
    }
}