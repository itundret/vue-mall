import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/lazyload@2x.gif'
  // attempt: 1
})
Vue.config.productionTip = false
// 不需要登陆的页面
// const whiteList = ['/home', '/goods']
// router.beforeEach(function (to, from, next) {
// 获取用户信息
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
