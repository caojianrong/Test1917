<template>
  <div class='modal'>
    <div class='box'>

     <h3>登录失效请重新登录</h3> 
     <button @click='login'>gologin</button>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    login(){
      this.$store.commit('SET_MODAL_STATE',false)
      this.$router.replace('/login')
    }
  }
}
</script>
<style >
.modal{
  background: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box{
  width: 300px;
  height: 200px;
  background: #fff;
}
</style>