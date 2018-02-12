<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 mx-auto">
                <div class="row">
                    <div class="col-12">
                        <h1>Selectize</h1>
                        <p>
                            Selectize working with VueJS model binding
                        </p>
                    </div>
                    <div class="col-12">
                        <selectize v-model="select" :options="options" :disabled="false"></selectize>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label>Selected value is:</label>
                            <input type="text" class="form-control" v-model="select">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import selectize from '../components/selectize.vue'

    export default {
        components: { selectize },
        data() {
            return {
                select: 1,
                options: [
                    { value: 1, text: 'foo' },
                    { value: 2, text: 'bar' }
                ]
            }
        }
    }
</script>