import store from './store/index'

export default {
    //Redirect to 404 page if route is not defined
    invalidRoute(to, from, next) {
        if(to.name) {
            next()
        } else {
            next({ name: 'index' })
        }
    },
    //Middleware for authenticated users
    auth(to, from, next) {
        //Users not authenticated will be redirected to 404
        next(!store.getters.isAuth ? { name: 'error.404' } : undefined)
    },
    guest(to, from, next) {
        //Users authenticated will be redirected to 404
        next(store.getters.isAuth ? { name: 'error.404' } : undefined)
    }
}