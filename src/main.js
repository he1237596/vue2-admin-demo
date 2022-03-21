/*
 * @Author: Chris
 * @Date: 2022-03-20 17:01:50
 * @LastEditors: Chris
 * @LastEditTime: 2022-03-21 23:04:05
 * @Descripttion: **
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
