// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

import Global from './globals/global'
window.Global = Global

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})