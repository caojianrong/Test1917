import state from  './state.js'
// import {ADD_LIST,DEL_LIST} from './action-types'
import * as types from './action-types'
console.log(types)
export default(prevState=state,actions)=>{
 console.log('奏折来了',prevState,actions)
  let newData=prevState
  let {type,params}=actions 
  switch (type) {
    case types.ADD_LIST:
      newData.list.push({matter:params,state:false})
      break;
    case types.DEL_LIST:
      newData.list.splice(params,1)
      break;
    default:
      break;
  }
  console.log('修改后的数据')
  return newData

}