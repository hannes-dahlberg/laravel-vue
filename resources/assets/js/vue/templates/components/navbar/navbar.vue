<template>
    <ul class="navbar-nav" :class="{ 'ml-auto': right, 'mr-auto': !right }">
        <li class="nav-item px-2 align-self-end align-self-lg-center" v-for="item in menu" :class="{ 'dropdown': item.menu, 'divider': item.divider, 'd-block, d-lg-none': item.mobileOnly, 'd-none d-lg-block': item.desktopOnly, 'active': $route.name == item.route || activeSubMenu(item) }">
            <a v-if="!item.menu && !item.divider && item.url" class="nav-link" :href="item.url" v-html="$t(item.name)"></a>
            <router-link v-else-if="!item.menu && !item.divider" class="nav-link" :to="item.route" v-html="$t(item.name)"></router-link>
            <a v-if="item.menu" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-html="$t(item.name)"></a>
            <div v-if="item.menu" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <div v-for="item in item.menu" :class="{ 'divider': item.divider, 'd-block, d-lg-none': item.mobileOnly, 'd-none d-lg-block': item.desktopOnly }">
                    <a v-if="!item.divider && item.url" class="dropdown-item" :class="{ 'active': $route.name == item.route }" :href="item.url" v-html="$t(item.name)"></a>
                    <router-link v-else-if="!item.divider" class="dropdown-item" :class="{ 'active': $route.name == item.route }" :to="item.route" v-html="$t(item.name)"></router-link>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['menu', 'right'],
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