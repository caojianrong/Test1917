面试必写内容
1.封装公有（功能 js）模块
  请求模块  axios 二次封装
  缓存模块  过期时间
2.封装过公有组件
  indexlist
  模态框组件 
  进度条组件

3.做过效率优化
  懒加载 
  防抖节流
  meta 
  缓存
  文件压缩
  文件合并
  精灵图 base64代替  字体图标
  路由懒加载
  
  体积优化
    文件压缩
    文件合并
    图片压缩  https://tinypng.com/
    精灵图（图标）  1.减少请求 2.减少一定的图片体积 base64 fonticon
  加载优化
    spa 首屏加载过慢   
    spa会将所有的组件打包在一个js文件里 并且第一次加载  组件过多首次加载资源过多页面白屏
    路由懒加载（异步组件）  用到那个组件加载那个组件
    添加过度动画提高用户体验
    图片懒加载  vue-lazyload
    下拉刷新
    上拉加载
  运行优化
    减少http请求 1. keep-alive 2.缓存事件


#### ui 框架的使用
ui库 复制粘贴
https://shimo.im/doc/LkpdnWxM1j40BDJj/
1. 下载安装
 npm install  mint-ui
2. 引入组件库
3. 引入样式文件
4. 使用 a.通过js 调用api的方式使用 b.通过组件的方式使用
 


#### ios 回弹阻尼
手机中网页运行webview 网页进行滑动 由于事件传递 会使整个webview层向下滑动，找到网页的根元素 toumove默认事件取消
#### 屏幕缩放问题 
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

#### 长按选中文本
user-select:false
#### 表单元素导致页面放大
1.没有禁止页面缩放
2.外层元素设置固定定位

#### poly-fill core-js 
用各种奇怪方式  浏览器的兼容 js 
#### 300ms延时  移动端 fastclick ios

#### ajax 
代理解决跨域问题
服务器没有跨域问题
npm run serve  会在本地开启一个本地服务器（node） 代理服务器  正向代理
npm run build  dist 网页html css js  nginx 反向代理



