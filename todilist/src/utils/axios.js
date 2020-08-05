import Axios from "axios";
// Add a request interceptor
import store  from  '../store/index'
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log('响应拦截器',response.data)
  // 所有的接口范湖数据都会经过拦截器 
  // 判断和token 相关的接口返回值 弹出模态框提示 用户去登录页面
  let  arrs=[-998,-996,-997,-999]
  if(arrs.indexOf(response.data.err) !==-1){
    console.log('去登录')
    // 模态框的显示隐藏由全局状态管理控制
    store.commit('SET_MODAL_STATE',true)
  }
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default Axios