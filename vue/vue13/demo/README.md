### 前端鉴权
1.用户状态鉴权 
2.登录时候 后端token 7天 -> 存到localstorage -> 
  1.前端 7天后删除 
  2.前端 7天后没有删除 用超时的token请求接口 后端判断token 失效
3.n天免登录
### 缓存封装
localstorage 有效期是永久  设置固定的有效期限
存值的时候 存一个创建时间  5：30 过期时间 1分钟
取值时候  获取取值时间   5：33

### 前端的鉴权
涉及到权限 验证问题 都需要后端参与 要不然都是假的
### 拦截器路由守卫
全局前置守卫 beforeEach  vvv
  所有的路由跳转都会经过 全局前置守卫   前端多页面鉴权
全局解析守卫  beforeResolve 
   所有的路由跳转都会经过 全局解析守卫 使用和全局前置一样  触发的阶段不同
路由独享守卫
   beforeEnter   对单个的路由有效   vvv
全局后置守卫
   alterEach   所有的路由跳转完毕后触发  已经不能做拦截操作了
组件内的守卫
   beforeRouteEnter  
   进入组件之前触发  内部没有this
   beforeRouteUpate   vvv
   组件路由更新的时候触发  特指动态导航 /xxx/:id  动态导航的切换是复用 组件不会重新渲染
   beforeRouteLeave   vv
   组件路由离开的时候触发   可以做离开组件之前的询问