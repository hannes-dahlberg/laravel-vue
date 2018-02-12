declare var axios: any

export type authPayload = {
    username: string,
    password: string
}

export class Auth {
    static auth(payload: authPayload): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post('/api/auth', payload).then((response: any) => {
                resolve(response.data)
            }).catch((error: any) => reject(error))
        })
    }

    static socialAuth(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get('/api/auth/' + url).then((response: any) => {
                resolve(response.data)
            }).catch((error: any) => reject(error))
        })
    }
}
