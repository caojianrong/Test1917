import React from 'react';
// 引入react对象
import ReactDOM from 'react-dom';
// 引入reactdom对象

import App from './App';
// 引入组件
import * as serviceWorker from './serviceWorker';

// 将组件挂载到真实dom上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
