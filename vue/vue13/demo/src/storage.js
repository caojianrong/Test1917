export default {
  setItem(key,value,exptime=30*1000){
    if(window.localStorage){

      let  obj={}
      obj.data=value 
      obj.ctime=(new Date()).getTime()
      obj.exptime=exptime
      localStorage.setItem(key,JSON.stringify(obj))
    }else{
      // 用cookie存值取值
    }
  },
  getItem(key){
      let data=JSON.parse(localStorage.getItem(key))
      if(!data){return null}
      let nTime=(new Date()).getTime() 
      if(nTime-data.ctime>=data.exptime){
        localStorage.removeItem(key)
        return null
      }else{

        return data.data
      }
  }
}
//封装第三方缓存模块
// 1.简化localstorage的存取值过程
// 2.将localstorage 赋予过期时间
// 3.低版本浏览器兼容