const path = require('path')
const online = true 
function resolve(dir){
  return path.join(__dirname,dir)
}
// 单入口 单出口
// module.exports = {
//   mode:online?'production':'development',
//   entry: './demo2/index.js',
//   output: {
//     path: resolve('./demo2/dist'),
//     filename: 'main.js'
//   }
// };
// 多入口 多出口
module.exports={
  mode:'development',
  entry:{
    hehe:resolve('./demo3/index1.js'),
    xixi:resolve('./demo3/index2.js')
  },
  output:{
    path:resolve('./demo3/dist'),
    filename:'[name]_[hash].js'  //name:多入口的key值 hash：唯一不重复的字符串
  }
}

// 