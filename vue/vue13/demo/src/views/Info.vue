<template>
  <div class="about">
    <h1>这里是我用户信息</h1>
  </div>
</template>
<script>
export default {
  created(){
    if(!localStorage.getItem('TOKEN')){
      this.$router.replace('/my/login')
    }
  }
}
</script>
