### 生命周期
15.6  
getDefaultProps 初始化props数据
getInitialState 初始化state 数据
componentWillMount  有数据 没有dom 修改数据不需要setState 可以做网络请求不推荐
componentDidMount 有数据 有dom 网络请求以及dom的初始化操作
componentWillReceiveProps 监听porps的改变  可以做网络请求 不推荐
shouldComponentUpdate  return true orfalse 根据返回的数据控制组件的渲染
componentWillUpdate 监听数据的改变 数据dom都是修改之前的  数据复制谨慎
componentDidUpdata 监听数据的改变 数据dom都是修改之后的  数据复制谨慎
componetWillUnMount 组件销毁触发 可以获取dom  擦屁股的操作  全局计时器 全局监听
16 
construtor 代替props 和 state初始化的生命周期

render 之前带will的生命周期 变成unsafe  为17版本删除做准备
UNSAFE_componentWillMount
UNSAFE_componentWillReceiveProps
UNSAFE_componentWillUpdate

保持不变
componentDidMount
shouldComponentUpdate
componentDidUpdata
componetWillUnMount

新增2个生命周期

17
将UNSAFE的3个生命周期正式删除

### 脚手架工具cli 
vue/cli create-react-app  基于webpack的一个工具，帮助我们快速创建一个项目
webpack gulp

npm install create-react-app -g       yarn
create-react-app -V  查看脚手架工具的版本
create-react-app 项目名字 创建项目
npm run start（serve）开发环境运行
npm run build 打包
npm run eject 解开大礼包
在git仓库做一个commit操作

### 项目目录
config(vue.config.js) 默认不存在 解开大礼包才会出现
对项目做一些配置  代理 
public 资源路径根vue中的public一样
scripts 文件 项目启动文件项目打包文件
src  源码文件
index.js === main.js 入口文件


#### pwa 
pwa 离线应用（网页） 主要基于h5新增的离线缓存技术


### React 16版本
创建组件的方式发生改变  
类组件   用class创建的组件 智能组件 容器组件  有状态组件 影子组件
函数组件  用函数创建的组件  傻瓜组件 ui组件   无状态组件

高阶组件


### 样式作用域 scoped 
vue为了防止组件中样式冲突 样式作用域scoped 
1.类名不一样BEM 命名法  class='button-error-small'  
recommend-swiper-top recommen-swiper-btoom
2.样式模块化   
3.cssinjs  不能用预处理语言

### 受控组件和非受控组件
操作表单元素 获取用户输入内容
非受控组件 通过ref绑定表单元素获取用户输入内容
受控组件  将表单元素和state进行绑定关联 修改input数据的同时修改state值

### 路由
[路由官网](https://reacttraining.com/react-router/web/guides/quick-start)