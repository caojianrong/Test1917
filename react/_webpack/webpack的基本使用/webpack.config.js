const path  = require('path')
function resove(pathName){
  // 传入一个相对路径返回一个绝对路径
  // webpack 所在的路径
  return  path.join(__dirname,pathName)
}
module.exports = {
  entry: './hehe/index.js', // 需要编译压缩的入口文件路径
  output:{
    path:resove('./hehe'),// 打包结束后的文件 存放路径
    filename:'main.js'//打包结束后的文件 的文件名
  },
  mode:true?'production':'development' //指定打包编译的模式 开发还是线上
};