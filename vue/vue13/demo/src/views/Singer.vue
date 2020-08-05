<template>
  <div class="singer">
    <h1>这里是歌手</h1>
    <button @click='back'>back</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
   methods:{
     back(){
       this.$router.go(-1)
     }
   },
  //  beforeRouteLeave (to, from, next) {
  //     let result=confirm('你真的要离开嘛?')
  //     console.log(result)
  //     if(result){ next()}
  //  }
}
</script>
