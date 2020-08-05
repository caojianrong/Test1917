### 前端工程化的工具
grunt 
gulp
webpack  前端的打包工具
按照文件的引用关系将文件进行打包处理

#### 安装webpack
npm install webpack -g 
npm install webpack  --save-dev  

webpack --mode development/product   filename(入口文件) -o filename（打包后的输出文件目录）
在 package.json 文件里有 scripts 配置启动命令
‘sever’:'webpack --mode=development/product   filename(入口文件) -o filename（打包后的输出文件目录）'

#### 配置文件  webpack.config.js
webpack.config.js 默认 要求和package.json 文件同级 
执行 webpack 指令会直接寻找当前目录下默认配置文件


#### webpack  
会用
1.项目 react vue 脚手架工具都是webpack 
2.项目组里有架构师 用webpack 搭建项目 
3.会使用webpack 代理  压缩 编译 预处理语言 别名 ... 
4.能够看懂架构师的webapck 配置 
5.也能自用webpack 搭建脚手架工具

#### webpack-dev-server 
在本地开启服务器  npm install webpack-dev-server --save-dev  
在package.json 
scripts:{
  "start" :"webpack-dev-server "
}
#### 移动文件
在启动的时候将index.html 文件移动到对应目录 和js文件做关联

#### 解析jsx

#### 解析样式
正常情况下 import 后面是一个js模块 
import ‘./xxx.css’ 是无效
style-loader  css-loader less-loader sass-loader
#### 路径加载
url-loader

http://note.youdao.com/noteshare?id=45c2604c6b4c0916cfce5acef1775e95