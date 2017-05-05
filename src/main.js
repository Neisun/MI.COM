// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入normalize.css和font-awesome.css
import 'font-awesome/css/font-awesome.min.css'
import 'reset.css/reset.css'
// 引入vue-resource模块
import vueResource from 'vue-resource'
import './assets/base.css'
import 'animate.css/animate.css'

import $ from 'jquery'

import store from './vuex/store.js'
Vue.config.productionTip = false
Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
