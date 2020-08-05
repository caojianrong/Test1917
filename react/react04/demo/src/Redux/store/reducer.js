
import  state from  './state'
// 老佛爷不是真正的老佛爷 本质是一个函数 特点1.第一个参数修改前的state数据，参数2是奏折actions
// 作用是根据action奏折修改该state数据
export default (prevState=state,actions)=>{
  console.log('老佛爷批奏折',prevState,actions)
  // 防止修改数据导致原始值发生改变页面不刷新  采用深拷贝
  let newData=JSON.parse(JSON.stringify(prevState))
  let {type,params}=actions
  // 根据奏折修改数据
  switch (type) {
    case 'CHANGE_NAME':
        newData.name=params
      break;
    case "CHANGE_AGE":
        newData.age=params 
        break;
    default:
      break;
  }
  console.log('修改的新数据',newData)
  return newData
}