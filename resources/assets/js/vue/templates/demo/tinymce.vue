<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mx-auto">
                <div class="row">
                    <div class="col-12">
                        <h1>TinyMCE</h1>
                    </div>
                    <div class="col-12">
                        <tinymce v-model="text"></tinymce>
                    </div>
                    <div class="col-12 mt-3 text-center">
                        <div class="btn-group" role="group" aria-label="...">
                            <button type="button" class="btn btn-default" :class="{ 'active': view == 'preview'}" v-on:click="view = 'preview'">Preview</button>
                            <button type="button" class="btn btn-default" :class="{ 'active': view == 'source'}" v-on:click="view = 'source'">Source</button>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div v-if="view == 'preview'" v-html="text"></div>
                        <textarea v-if="view == 'source'" style="width: 100%; height: 200px; resize: none;" v-model="text"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import tinymce from '../components/tinymce.vue'

    export default {
        components: { tinymce },
        data() {
            return {
                view: 'preview',
                text: '<p>Default text</p>'
            }
        }
    }
</script>