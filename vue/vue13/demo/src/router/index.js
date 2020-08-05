import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import My from '../views/My.vue'
import Singer from '../views/Singer.vue'
import Login from '../views/Login.vue'
import Info from '../views/Info.vue'
import Detail from '../views/Detail'


import  storage from '../storage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('home 独享守卫')
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/singer',
    name: 'singer',
    component: Singer,
    children:[
      {
        path:':mid',
        component:Detail
      }
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    children:[
      {
        path:'info',
        component:Info
      },
      {
        path:'login',
        component:Login
      }
    ]
  },
  

]

const router = new VueRouter({
  routes
})
// 路由的全局前置守卫
router.beforeEach((to,from,next)=>{
  console.log('to',to)
  console.log('from',from)
  let token= storage.getItem('TOKEN')
  let users=['/singer']  //需要验证token的路径数组
  if(users.indexOf(to.path)===-1){
    // 目标路径不需要需要验证token 
    next()
  }else{
    if(token){
      next()
    }else{
      next('/my/login')
    }
  }
 
})
// 路由独享守卫 beforeEnter 只对使用的路由生效
// 全局后置守卫
// a-b
// router.afterEach((to,from)=>{
//   console.log('路由后置守卫',to,from)
// })
export default router
