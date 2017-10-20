//Import libraries
import _ from 'lodash'
import Vue from 'vue'
import axios from 'axios'
import Echo from 'laravel-echo'
import jQuery from 'jquery'
import bootstrap from 'bootstrap'
import selectize from 'selectize'
import Nodehelpers from 'nodehelpers'

//Setting to window
window.Vue = Vue
window.axios = axios
window.$ = window.jQuery = jQuery

//Setting default headers for axios
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': $('meta[name=\'csrf-token\']').attr('content'),
    'X-Requested-With': 'XMLHttpRequest'
}

try {
    window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: process.env.MIX_SOCKET_IO_URL
    })
} catch(error) {
    console.error(error)
}