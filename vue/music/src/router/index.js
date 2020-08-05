import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 同步引入
import Recommend from 'pages/Recommend'
import Singer from 'pages/Singer/Singer.vue'
import Rank from 'pages/Rank'
import Search from 'pages/Search'
import Detail from  'pages/Detail/Detail.vue'
// 异步引入
// const  Recommend =()=>import('pages/Recommend')
// const Singer =()=>import('pages/Singer/Singer.vue')
// const Rank =()=>import('pages/Rank')
// const Search =()=>import('pages/Search')
// const Detail =()=>import( 'pages/Detail/Detail.vue')

const router = new VueRouter({
  routes:[
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer,
      children:[
        {
          path:':mid',
          component:Detail
        }
      ]
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/recommend'
    }
  ]
})

export default router
