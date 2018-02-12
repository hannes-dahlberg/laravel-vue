export default {
    appLoading: false,
    menu: [
        { name: 'home', route: 'home', position: 'right' },
        { name: 'about', route: 'about', position: 'right' },
        { name: 'contact', route: 'contact', position: 'right' }
    ],
    guestMenu: [],
    authMenu: [
        { divider: true },
        { name: 'logout', route: 'auth.logout', position: 'right' }
    ],
    languages: ['en', 'sv'],
    defaultLanguage: 'en',
    currentLanguage: null
}