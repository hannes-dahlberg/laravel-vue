export default {
    appLoading: false,
    menu: [
        { name: 'home', route: { name: 'home' }, position: 'right' },
        { name: 'about', route: { name: 'about' }, position: 'right' },
        { name: 'contact', route: { name: 'contact' }, position: 'right' }
    ],
    guestMenu: [],
    authMenu: [
        { divider: true },
        { name: 'logout', route: { name: 'auth.logout' }, position: 'right' }
    ],
    languages: ['en', 'sv'],
    defaultLanguage: 'en',
    currentLanguage: null
}