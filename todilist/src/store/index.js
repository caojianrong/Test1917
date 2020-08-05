import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {getlist} from '../api/api'
import {SET_LIST,SET_MODAL_STATE} from './mutation-types'
export default new Vuex.Store({
  state: {
     list:[1,2,3],
     modalState:false,
  },
  mutations: {
     [SET_LIST](state,list){
        state.list=list
     },
     [SET_MODAL_STATE](state,boolean){
        state.modalState=boolean
     }
  },
  actions: {
     SET_LIST_ACTION({commit}){
      //  获取数据的接口
      getlist().then((data)=>{
        if(data.err===0){
          // 获取完毕后调用mutations方法更新数据
           commit(SET_LIST,data.list)
        }
      })
     }
  },
  modules: {
  }
})
