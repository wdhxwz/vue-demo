// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import md5 from 'js-md5'
import qs from 'qs'
import VueCookies from 'vue-cookies'
import VueLodash from 'vue-lodash'
Vue.use(VueCookies)

const options = { name: 'lodash' }
Vue.use(VueLodash, options)

let Base64 = require('js-base64').Base64

Vue.config.productionTip = false
Vue.prototype.md5 = md5
Vue.prototype.Base64 = Base64
Vue.prototype.qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
