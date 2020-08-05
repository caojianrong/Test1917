<template>
  <div>
      <input type="text" v-model="inputValue">
      <button @click='add'>add</button>
  </div>
</template>
<script>
import {addlist} from '../api/api'
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      inputValue:"123"
    }
  },
   methods: {
     ...mapActions(['SET_LIST_ACTION']),
     add(){
       addlist(this.inputValue)
       .then((res)=>{
         if(res.err===0){
           this.SET_LIST_ACTION()
         }
       })
     }
   },
}
</script>