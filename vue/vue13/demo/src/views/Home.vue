<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    这里是首页
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    // this.$storage.setItem('userInfo',{us:123,token:789})
    let result=this.$storage.getItem('userInfo')
    console.log(result,typeof result)
  }
}
</script>
