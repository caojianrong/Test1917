const path  = require('path')
function resove(pathName){
  // 传入一个相对路径返回一个绝对路径
  // webpack 所在的路径
  return  path.join(__dirname,pathName)
}
// 单入口 单出口
module.exports={
  entry:resove('./js/index.js'),
  output:{
    path:resove('./dist'),
    filename:'main.js'
  },
  mode:'development',
  module: {
    // loader 加载器 
    rules: [
      { test: /\.(jpg)$/, use: 'url-loader' }  //处理图片
    ]
  }
}