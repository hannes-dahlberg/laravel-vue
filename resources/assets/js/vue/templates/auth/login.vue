<template>
    <div class="col-xs-12 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Login</h3>
                </div>
                <div class="panel-body">
                    <form id="login_form" v-on:submit.prevent="login">
                        <div class="form-group" :class="{ 'has-error': error }">
                            <label for="email">Email</label>
                            <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Email" :disabled="loading" />
                        </div>
                        <div class="form-group" :class="{ 'has-error': error }">
                            <label for="password">Password</label>
                            <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Password" :disabled="loading" />
                        </div>
                        <button type="submit" class="btn btn-default" :disabled="loading" data-loading-text="<i class='fa fa-spinner fa-spin '></i>">Login</button>
                        <p v-if="error" class="bg-danger margin-top-10 padding-10">
                            Email and/or password was incorrect. Please try again.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            error: false,
            form: { email: '', password: '' }
        }
    },
    computed: {
        user() { return this.$store.getters.getUser }
    },
    watch: {
        /**
        Watching the loading state to change login form submit button loading state
        */
        loading(value) {
            var button = $('#login_form button[type=submit]');
            if(value) {
                button.button('loading')
            } else {
                button.button('reset')
            }
        }
    },
    methods: {
        login() {
            //Setting loading to true
            this.loading = true

            //Reset error
            this.error = false

            //Dispatch the authentication action with user input email and password
            this.$store.dispatch('auth', {
                username: this.form.email,
                password: this.form.password
            }).then(() => { //Success
                //Redirect to admin page
                this.$router.push({ name: 'page.home' })
            }).catch((error) => { //Error
                //Setting error to true
                this.error = true

                //Reseting loading
                this.loading = false
            })
        }
    }
}
</script>