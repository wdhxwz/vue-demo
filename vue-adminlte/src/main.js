// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './lib/jquery-vender.js'
import 'bootstrap'
import 'admin-lte'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import md5 from 'js-md5'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'    // 使用 CSS

// 引入axios，http请求
import axios from 'axios'
Vue.prototype.axios = axios

// Vue.use(iView)

// 引入md5
Vue.prototype.md5 = md5

// 引入toastr 提示框
var toastrConfigs = {
  position: 'top center',
  showDuration: 1000,
  timeOut: 10000
}
Vue.use(CxltToastr, toastrConfigs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
