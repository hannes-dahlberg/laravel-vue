<template>
    <div v-if="inline"></div>
    <textarea v-else></textarea>
</template>
<script>
    export default {
        props: ['value', 'disabled', 'inline'],
        watch: {
            value(value) {
                /*If the tinyMCE object exists (has been initiated), the value is actually set and not just null or false
                and last check if the value of the tinyMCE object is not the same as the new value. Otherwise the tinyMCE
                object will be updated each time itself is edited. We only want it to update on outside changes*/
                if(tinymce.get($(this.$el).attr('id')) && value && tinymce.get($(this.$el).attr('id')).getContent() !== value) {
                    tinymce.get($(this.$el).attr('id')).setContent(value);
                }
            },
            disabled() {

            }
        },
        mounted() {
            //Set id to editor
            var id = this.randomString(8);
            $(this.$el).attr('id', id);

            //Initiate TinyMCE on textarea
            tinymce.init({
                selector: '#' + id,
                theme: 'modern',
                inline: this.inline,
                width: '100%',
                height: 300,
                autoresize_min_height: 200,
                autoresize_max_height: 800,
                plugins: [
                    'lists autolink link responsivefilemanager autoresize'
                ],
                toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link',
                image_advtab: true ,
                external_filemanager_path:'/filemanager/',
                filemanager_title:'Responsive Filemanager' ,
                external_plugins: {
                    'filemanager' : '/filemanager/plugin.min.js'
                },
                setup: (editor) => {
                    //Event listener for change
                    editor.on('change', (e) => {
                        /*When the TinyMCE editor is changed the vue directive set method
                         is called to updated the vue object as well*/
                         this.$emit('input', editor.getContent())
                    });
                    editor.on('init', (e) => {
                        editor.setContent(this.value)
                    })
                }
            });
        },
        methods: {
            randomString(length) {
                var text = ''
                var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

                for( var i=0; i < length; i++ ) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length))
                }

                return text
            }
        }
    }
</script>