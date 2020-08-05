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

#### 路由实现原理 根据url的改变切换组件
1. 控制url改变
   window.localtion.hash=''
2. 监听url改变  渲染渲染不同的组件 （hash history） hashchange pushstate

#### react-router-dom （react-native rn 做app）
1-3版本 react-router  
4-5  react-router-dom 做网页  react-router-native 做app的路由
npm install react-router-dom

vue ：路由基本使用 router-link router-view  声明式导航 编程式导航  动态路由 命名路由 命名视图 路由嵌套  路由传参 重定向 路由守卫 路由懒加载

##### 路由mode
路由容器
<HashRouter> hash路由
<BrowseRouter> 历史路由
控制地址栏改变
<Link to='/path'>
<NavLink to='/path' activeClassName='red'>
渲染组件
<Route path='/匹配路径' component={渲染组件}> 
<Route path='/匹配路径' render={渲染组件}>

exact 精准匹配（全匹配） path 和url必须完全一致

<Switch> 万里挑一
只渲染内部第一个匹配到的组件
<Redirect from='' to=''>重定向

##### 编程式导航  声明式导航
注意路由对象

##### 路由传参
1. 动态导航  <Route path='/my/:mid'/>
   在目标组件里的路由对象 match
   刷新页面数据依然存在，无法传递数据对象 
2.state传参
  histroy.push({pathname:'路径地址',state:{}})
  页面刷新后数据丢失，有点是可以传递各种数据 数组对象
3.query 
 histroy.push('/my/123/456?us=123&ps=123')
 页面刷新数据依然保留  数据量有限传递对象数组麻烦 使用数据自己去做解析

##### 嵌套路由
路由里套路由  
嵌套路由的外层不能喝用精准匹配
<Route path='/my' render={()=>{
  return(
    <div>
      <Route path='/my/info' component={}>
    </div> 
  )
}}></Route>

#### withRouter
是一个高阶组件 可以处理一个组件 给被处理的组件添加路由对象

#### 高阶组件 HOC
http://note.youdao.com/noteshare?id=24eb39aa32795c8053147f5c6a5bbffd

高阶组件 本是一个函数 接受一个组件作为参数 返回一个新组件
高阶函数 本是一个函数  接受一个函数作为参数 返回一个新的函数

被高阶组件处理的组件 一般从props中获取数据
封装优

应用 ： 路由守卫  withrouter  connect  antd Form.create()   