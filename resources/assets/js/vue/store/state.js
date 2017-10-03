export default {
    appLoading: false, //State for defining if the app is in a global loading stage or not
    menu: [ //Menu to render in navigation bar
        { name: 'menu.home', route: { name: 'page.home' } },
        { divider: true }, //Menu Divider
        { name: 'menu.demo.demo', menu: [
            { name: 'menu.demo.events', route: { name: 'demo.events' } },
            { name: 'menu.demo.parallax', route: { name: 'demo.parallax' } },
            { divider: true }, //Menu Divider
            { name: 'menu.demo.selectize', route: { name: 'demo.selectize' } },
            { name: 'menu.demo.tinymce', route: { name: 'demo.tinymce' } }
        ]}
    ],
    guestMenu: [ //Menu only available for guests
        { name: 'menu.login', route: { name: 'auth.login' }, position: 'right' }
    ],
    authMenu: [ //Menu only available for authenticated users
        { name: 'menu.logout', route: { name: 'auth.logout' }, position: 'right' }
    ],
    languages: ['en'],
    defaultLanguage: 'en',
    currentLanguage: null
}