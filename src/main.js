/*
* 入口js
* */
import Vue from 'vue'
import App from  './App'
import router from  './router'

// stylus 样式文件
//import './common/stylus/mixins.styl'/*全局样式引入可在这引入 引入公共样式*/
//字符图标引入
import './common/css/iconfont.css'


/* eslint-disable no-new */
new Vue({
  el:'#app',
  render:h => h(App),
  router,
})
