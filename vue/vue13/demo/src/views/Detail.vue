<template>
  <div class="about">
    <h1>歌手详情页</h1>
  </div>
</template>
<script>
export default {
  created(){
    let mid=this.$route.params.mid 
    console.log(mid)
  },
  beforeRouteUpdate(to,from,next){
      console.log(to.params.mid)
  //动态导航之间的切换  组件是复用的 所以created的生命周期不会重复执行
  //所以在组件内部的守卫获取最新mid 更新数据
  // 动态导航 对象与组件内的守卫只会触发 beforeRouteUpdate
      next()
  },
   beforeRouteEnter (to, from, next) {
     console.log('进入组件之前',this)
     next()
  },
}
</script>
