import store from './store'
import {ADD_LIST,DEL_LIST}from './action-types'
export default {
  addlist(matter){
    let action={
      type:ADD_LIST,
      params:matter
    }
    store.dispatch(action)
  },
  dellist(index){
    let action={
      type:DEL_LIST,
      params:index
    }
    store.dispatch(action)
  }
}