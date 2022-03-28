/*
 * @Author: Chris
 * @Date: 2022-03-20 17:01:50
 * @LastEditors: Chris
 * @LastEditTime: 2022-03-28 22:49:09
 * @Descripttion: **
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
