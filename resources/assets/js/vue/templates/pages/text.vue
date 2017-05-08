<template>
    <div style="height: 100vh;">
        <a :name="text.name"></a>
        <tinymce v-if="$parent.isAuth" v-model="text.content" :inline="true" :save="save"></tinymce>
        <div v-else v-html="text.content"></div>
    </div>
</template>
<script>
    import tinymce from '../components/tinymce.vue'
    export default {
        props: ['text'],
        components: { tinymce },
        methods: {
            save() {
                return new Promise((resolve, reject) => {
                    this.$store.dispatch('updateText', { textId: this.text.id, data: this.text }).then(() => resolve()).catch(error => reject(error))    
                })
            }
        }
    }
</script>