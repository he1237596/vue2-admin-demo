/*
 * @Author: Chris
 * @Date: 2022-03-21 23:33:45
 * @LastEditors: Chris
 * @LastEditTime: 2022-03-24 00:12:34
 * @Descripttion: **
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net/'
})

export default request
