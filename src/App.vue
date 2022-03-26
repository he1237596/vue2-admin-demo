<!--
 * @Author: Chris
 * @Date: 2022-03-20 17:01:50
 * @LastEditors: Chris
 * @LastEditTime: 2022-03-26 15:08:51
 * @Descripttion: **
-->
<template>
  <div id="app">
    <h1>ddddd</h1>
    <el-button type="warning">ddd</el-button>
    <el-button type="danger">ddd</el-button>
    <el-button type="danger" round>ddd</el-button>
    <el-button type="danger"  icon="el-icon-edit" circle></el-button>
    <el-input-number v-model="number" @change="handleChange"></el-input-number>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      number: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less">
</style>
