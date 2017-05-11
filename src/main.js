// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入reset.css和font-awesome.css
import 'font-awesome/css/font-awesome.min.css'
import 'reset.css/reset.css'
// 引入vue-resource模块
import vueResource from 'vue-resource'
// 引入base.css文件，个人感觉可引入也可不引入，因为有了reset.css
import './assets/base.css'
// 动画库animate.css
import 'animate.css/animate.css'
// 引入jquery，方便项目开发，基本上用的不是很多
import $ from 'jquery'
// 使用vuex对公共的资源进行管理
import store from './vuex/store.js'

Vue.config.productionTip = false
Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  // 引入vuex中的store
  store
})
