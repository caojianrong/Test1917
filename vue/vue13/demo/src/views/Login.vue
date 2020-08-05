<template>
  <div class="about">
    <h1>这里是登录</h1>
    <button @click='login'>login</button>
  </div>
</template>
<script>
export default {
  methods:{
    login(){
      this.$storage.setItem('TOKEN',12312313)
    }
  }
}
</script>