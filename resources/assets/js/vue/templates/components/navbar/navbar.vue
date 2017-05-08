<template>
    <ul class="nav navbar-nav navbar-right">
        <li v-for="menuItem in menu" :role=" menuItem.divider ? 'separator' : false" :class="{ 'divider': menuItem.divider, 'active': $route.name == menuItem.route }">
            <router-link v-if="!menuItem.menu && !menuItem.divider" :to="{ name: menuItem.route }">
                {{ $t('menu.' + menuItem.name) }}
            </router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['menu'],
        methods: {
            activeMenu(menuItem) {
                return false
            }
        }
    }
</script>