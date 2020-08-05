import {createStore} from 'redux'
// 引入创建store对象的方法
import Reducer from  './reducer'
// 引入老佛爷
let store=createStore(Reducer)
// 将老佛爷和小皇帝关联
export default store