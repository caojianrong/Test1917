### webapck
前端自动化构建  gulp  webpack  grunt  (vue/cli  create-react-app)

webpack 按照依赖关系 将代码进行和合并打包

### 安装webpack
npm install webpack -g 全局安装   4.0.2
npm install webpack  项目安装 
在 package.josn 文件 script  放webpack的执行命令
webpack   
从当前目录 找src文件夹里的index.js 文件
将该文件编译压缩 输出到当前文件夹下 dist 目录   main.js

webpack  --mode='production (development)' production线上模式   development开发者模式   代码是否会被压缩

webpack   入口路径  -o 出口路径  --mode='development'

### webpack 配置文件
1. 当运行webpack 命令的时候  在运行的目录下 找一个文件  webpack.config.js
2. 指定运行目录 webpack --config='执行路径' 读取某一个特定的配置文件

