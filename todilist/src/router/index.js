import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component:Login
   
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem('token')
  if(token){
    next()
  }else{
    // 拦截处理
    let paths=['/']
    if(paths.indexOf(to.path)==-1){
      next()
    }else{
      
    }
  }
})

export default router
