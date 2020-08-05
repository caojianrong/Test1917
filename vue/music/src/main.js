import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './style/reset.css'
import axios from 'utils/axios.js'
import store from './store'
import './style/animate.css'
// 使用ui库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 图片懒加载
import LazyLoad from  'vue-lazyload'
// Vue.use(LazyLoad)
Vue.use(LazyLoad, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/favicon.ico',
  attempt: 1
})
// 把样式当成模块引入
Vue.config.productionTip = false

Vue.prototype.$axios=axios 
// 将axios请求模块 挂载到vue的原型上


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
