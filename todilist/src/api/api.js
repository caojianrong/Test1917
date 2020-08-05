import axios from  '../utils/axios'
import qs from 'qs'
function fomatData(data){
  // axios 默认的post数据上传格式是json 格式 如果是表单格式需要用qs或者其他方式进行处理
  //详情见axios文档
 return qs.stringify(data)
}
export const  login = (us,ps)=>{
  return new Promise((resolve,reject)=>{
    let url='http://47.95.207.1:8080/v1/user/login'
    axios.post(url,fomatData({us,ps})).then((res)=>{resolve(res)})
    .catch((err)=>{reject(err)})
  })
}

export const  getlist = ()=>{
  console.log('获取数据')
  return new Promise((resolve,reject)=>{
    let url='http://47.95.207.1:8080/v1/matter/get'
    let token= localStorage.getItem('token')||''
    let uid=localStorage.getItem('uid')||''
    console.log(222)
    axios.post(url,fomatData({token,uid})).then((res)=>{resolve(res)})
    .catch((err)=>{reject(err)})
  })
}



export const  dellist = (_id)=>{
  return new Promise((resolve,reject)=>{
    
    let url='http://47.95.207.1:8080/v1/matter/del'
    let token= localStorage.getItem('token')||''

    axios.post(url,fomatData({token,_id})).then((res)=>{resolve(res)})
    .catch((err)=>{reject(err)})
  })
}

export const  updatelist = (_id)=>{
  return new Promise((resolve,reject)=>{
    
    let url='http://47.95.207.1:8080/v1/matter/update'
    let token= localStorage.getItem('token')||''

    axios.post(url,fomatData({token,_id})).then((res)=>{resolve(res)})
    .catch((err)=>{reject(err)})
  })
}

export const  addlist = (matter)=>{
  return new Promise((resolve,reject)=>{
    
    let url='http://47.95.207.1:8080/v1/matter/add'
    let token= localStorage.getItem('token')||''
    let  uid=localStorage.getItem('uid')||''
    axios.post(url,fomatData({token,uid,matter})).then((res)=>{resolve(res)})
    .catch((err)=>{reject(err)})
  })
}

