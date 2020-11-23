// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import "./assets/css/reset.css"
import "./assets/js/rem"
import "../src/assets/icon/iconfont.css"
import  store from './store'
import "swiper/css/swiper.min.css"
import "swiper/js/swiper.min"

import VantUI from 'vant'
Vue.use(VantUI)
import 'vant/lib/index.css'

import com from "./commen"
for(let i in com){
  Vue.component(i,com[i])
}

Vue.prototype.$imgUrl='http://localhost:3000'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
