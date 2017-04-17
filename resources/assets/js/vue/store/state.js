export default {
    appLoading: false, //State for defining if the app is in a global loading stage or not
    menu: [ //Menu to render in navigation bar
        { name: 'home', route: 'page.home' }
    ],
    guestMenu: [ //Menu only available for guests
        { name: 'login', route: 'auth.login', position: 'right' }
    ],
    authMenu: [ //Menu only available for authenticated users
        { name: 'logout', route: 'auth.logout', position: 'right' }
    ]
}