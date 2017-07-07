import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['/page/index'], resolve)
const Login = resolve => require(['/page/login/login'], resolve)
const Home = resolve => require(['/page/Home/home'], resolve)
const GoodS = resolve => require(['/page/Goods/goods'], resolve)
const goodsDetails = resolve => require(['/page/Goods/goodsDetails'], resolve)
const PerDetails = resolve => require(['/page/PerDetails/perDetails'], resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'goods', component: GoodS}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/goodsDetails/:productId', name: 'goodsDetails', component: goodsDetails},
    {path: '/perDetails', name: 'perDetails', component: PerDetails},
    {path: '*', redirect: '/home'}
  ]
})
