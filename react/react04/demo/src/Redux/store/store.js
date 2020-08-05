import {createStore,applyMiddleware} from 'redux'
// 引入中间价
import thunk from 'redux-thunk'
// 引入异步插件
// 引入创建store对象的方法
import Reducer from  './reducer'
// 引入老佛爷
let store=createStore(Reducer,applyMiddleware(thunk))
// 使用异步中间件
// 将老佛爷和小皇帝关联
export default store