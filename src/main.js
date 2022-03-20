/*
 * @Author: Chris
 * @Date: 2022-03-20 17:01:50
 * @LastEditors: Chris
 * @LastEditTime: 2022-03-20 17:29:51
 * @Descripttion: **
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.less'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
