<template>
    <nav class="navbar navbar-default navbar-fixed-top margin-0 padding-xs-right-0 padding-sm-right-30 padding-md-right-30 padding-lg-right-30">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="" class="navbar-brand hidden-sm hidden-md hidden-lg">
                    {{ $t('menu.' + $route.name) }}
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <navbar :menu="menu"></navbar>
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
                return this.$store.getters.getMenu
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