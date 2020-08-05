<template>
  <div class="登录">
    <input type="text" v-model='us'>
    <input type="text" v-model='ps'>
    <button @click='_login'>login</button>
    <h1>登录</h1>
  </div>
</template>
<script>
import {login} from  '../api/api'
export default {
  data(){
    return{
      us:123,
      ps:123
    }
  },
  methods: {
    _login(){
      login(this.us,this.ps)
      .then((res)=>{
        if(res.err==0){
          let {_id,token}=res.info
          console.l
          localStorage.setItem('uid',_id)
          localStorage.setItem('token',token)
        }
        console.log(res)
      })
    }
  },

}
</script>