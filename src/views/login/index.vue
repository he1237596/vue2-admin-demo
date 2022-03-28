<!--
 * @Author: Chris
 * @Date: 2022-03-26 14:54:52
 * @LastEditors: Chris
 * @LastEditTime: 2022-03-28 22:37:55
 * @Descripttion: **
-->
<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="user">
      <div class="login-header"></div>
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="user.checked">我已阅读并同以用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" :loading="loading" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        checked: true
      },
      loading: false
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      this.loading = true
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: this.user
      }).then(res => {
        this.loading = false
        this.$message.success('登录成功')
      }).catch(err => {
        console.log(err)
        this.$message.error('登录失败')
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/login_bg.jpg) no-repeat white;
  background-size: contain;
  background-position: center center;
  .login-header {
    width: 320px;
    height: 48px;
    margin-bottom: 24px;
    background: url(../../assets/logo_index.png) center no-repeat;
    background-size: contain;
  }
  .login-form {
    min-width: 320px;
    background-color: #fff;
    padding: 50px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
