//Import libraries
import _ from 'lodash'
import Vue from 'vue'
import axios from 'axios'
import Echo from 'laravel-echo'
import jQuery from 'jquery'
import bootstrap from 'bootstrap'
import selectize from 'selectize'
import Nodehelpers from 'nodehelpers'
import popperJs from 'popper.js'

//Setting to window
window._ = _
window.axios = axios
window.Vue = Vue
window.axios = axios
window.$ = window.jQuery = jQuery
window.Popper = popperJs.default

//Setting default headers for axios
window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': $('meta[name=\'csrf-token\']').attr('content'),
    'X-Requested-With': 'XMLHttpRequest'
}

try {
    window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: process.env.SOCKET_IO_URL
    })
} catch(error) {
    console.error(error)
}