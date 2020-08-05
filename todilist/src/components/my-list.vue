<template>
  <div>
      <ul>
        <li v-for='(item,index) in list' :key='index'>
          {{item.matter}}
          <span v-if='item.state'>已完成</span> 
          <button v-else @click="update(item._id)">完成</button>
          <button @click='del(item._id)'>del</button>
          </li>
      </ul>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import {getlist,dellist,updatelist} from '../api/api'
import {SET_LIST} from '../store/mutation-types'
export default {
   computed:{
     ...mapState(['list']),
    
   },
   methods: {
     ...mapActions(['SET_LIST_ACTION']),
     ...mapMutations([SET_LIST]),
     update(_id){
      // 点击完成按钮触发的方法 
      
       updatelist(_id).then((res)=>{
        //  调用修改接口
         if(res.err===0){
          //  修改成功之后 调用action里的方法更新数据
          this.SET_LIST_ACTION()
         }
       })
     },
     del(_id){
      //  单击删除按钮触发
      dellist(_id).then((res)=>{
        // 调用删除的接口
       if(res.err===0){
         //成功后调用接口更新数据
         this.SET_LIST_ACTION()
       }
      })
     }
   },
   created(){
     console.log(this)
     this.SET_LIST_ACTION()
   }
}
</script>