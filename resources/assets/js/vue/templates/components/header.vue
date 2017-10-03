
<template>
    <nav v-navbar-fold="{ threshold: 50 }" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link :to="{ name: 'page.home' }" class="navbar-brand">
                <img width="173" class="ml-3 ml-md-0" src="/img/brand.png" :alt="$t('brand')" />
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <navbar :menu="menu"></navbar>
                <navbar v-if="menuRight.length" :menu="menuRight" :right="true"></navbar>
            </div>
        </div>
    </nav>
</template>
<script>
    import navbar from './navbar/navbar.vue'

    export default {
        components: { navbar },
        computed: {
            menu() {
                return this.$store.getters.getMenu.filter(item => item.position == 'left' || !item.position)
            },
            menuRight() {
                return this.$store.getters.getMenu.filter(item => item.position == 'right')
            }
        },
        methods: {
            //Check if menu has active child
            activeSubMenu(menuItem) {
                //No menu exists, return false
                if(!menuItem.menu) { return false }

                //Active if a submenu child is the current route
                return menuItem.menu.findIndex(subMenu => this.$route.name == subMenu.route) != -1 ? true : false
            }
        }
    }
</script>