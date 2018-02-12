<template>
    <div class="container mt-5">
        <text-component v-for="text in texts" :text="text" :key="text.id"></text-component>
    </div>
</template>
<script>
    import textComponent from './text.vue'
    export default {
        components: { textComponent },
        computed: {
            texts() {
                return this.$store.getters.getTexts
            },
            isAuth() {
                return this.$store.getters.isAuth
            }
        },
        mounted() {
            this.getTexts().then(() => {
                this.addScrollEvent()
            })
        },
        methods: {
            getTexts() {
                return new Promise((resolve, reject) => {
                    this.$store.dispatch('getTexts').then(() => {
                        if(['home', 'about', 'contact'].indexOf(this.$route.name) != -1) {
                            $(window).scrollTop(Math.ceil($('a[name=\'' + this.$route.name + '\']').offset().top - 100))
                        }
                        resolve();
                    }).catch(() => reject())
                })
            },
            addScrollEvent() {
                this.scrollEvent = $(window).scroll((e) => {
                    if($(window).scrollTop() >= Math.ceil($('a[name=\'contact\']').offset().top - 100)) {
                        this.$router.push({ name: 'contact', params: { scroll: true } })
                    } else if($(window).scrollTop() >= Math.ceil($('a[name=\'about\']').offset().top - 100)) {
                        this.$router.push({ name: 'about', params: { scroll: true } })
                    } else if($(window).scrollTop() >= Math.ceil($('a[name=\'home\']').offset().top - 100)) {
                        this.$router.push({ name: 'home', params: { scroll: true } })
                    }
                })
            }
        }
    }
</script>