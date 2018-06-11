// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 集成jQuery
import './lib/jquery-vender.js'

/* 使用less需要安装：npm i less style-loader css-loader less-loader - D */
import './assets/todos.less'

// 集成bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// 集成font-awesome图标
import 'font-awesome/css/font-awesome.css'

// 集成Admin-lte
import 'admin-lte'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
