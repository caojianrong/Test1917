const path  = require('path')
function resove(pathName){
  // 传入一个相对路径返回一个绝对路径
  // webpack 所在的路径
  return  path.join(__dirname,pathName)
}
// 多入口 多出口
module.exports={
  entry:{
    hehe:resove('./js/index.js'),
    xixi:resove('./js/son1.js'),
    haha:resove('./js/son2.js')
  },
  output:{
    path:resove('./dist'),
    filename:'[name]_[hash].js'    //name对应的入口文件的key值 hash防止读取缓存文件
  },
  mode:'development'
}