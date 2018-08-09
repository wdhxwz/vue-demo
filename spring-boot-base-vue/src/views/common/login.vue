<template>
  <div class="bg" style="height: 974px;">
    <div class="signin">
	     <div class="signin-head">
         <img src="~@/assets/bg/login/user3-128x128.jpg" alt="" class="img-circle">
       </div>
      <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon style="padding:43px 15px 15px 15px;">
        <el-form-item prop="userName" style="padding-left: 80px;">
          <el-input v-model="dataForm.userName" placeholder="帐号" style="height:44px ;width:300px;">
            <i slot="prefix" class="el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" style="padding-left: 80px;">
          <el-input v-model="dataForm.password" type="password" placeholder="密码" style="height:44px;width:300px;">
            <i slot="prefix" class="el-input__icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item style="padding-left:80px;padding-top: 5px;">
          <el-button style="width: 300px;font-size: 18px;" class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { getUUID } from '@/utils'
  export default {
    data () {
      return {
        dataForm: {
          userName: '',
          password: '',
          uuid: '',
          captcha: ''
        },
        dataRule: {
          userName: [
            { required: true, message: '帐号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        },
        captchaPath: ''
      }
    },
    created () {
      // this.getCaptcha()
    },
    methods: {
      // 提交表单
      dataFormSubmit () {
        var self = this
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl('/sys/user/login'),
              method: 'post',
              data: this.$http.adornData({
                'username': this.dataForm.userName,
                'password': self.md5(this.dataForm.password)
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$cookie.set('token', data.data.token)
                this.$router.replace({ name: 'home' })
              } else {
                // this.getCaptcha()
                this.$message.error(data.message)
              }
            })
          }
        })
      },
      // 获取验证码
      getCaptcha () {
        this.dataForm.uuid = getUUID()
        this.captchaPath = this.$http.adornUrl(`/captcha.jpg?uuid=${this.dataForm.uuid}`)
      }
    }
  }
</script>

<style lang="scss">
html,body {
  height: 100%;
}

.bg {
	background:url(~@/assets/img/login_bg_0.jpg) #f8f6e9 0 0 no-repeat;
  background-size: cover;
}

.signin {
	width:477px;
	height:479px;
	background:url(~@/assets/bg/login/login_bg.png) no-repeat;
	margin:0 auto;

	position:absolute;
	top:50%;
	left:50%;
	margin-top:-239px;
	margin-left:-238px;
}
.signin-head {
	margin:0 auto;
	padding-top:30px;
	width:120px;
}
.img-circle{
  border-radius: 50%;
}
input{
  height: 44px !important;
}

.el-form-item {
    margin-bottom: 20px !important;
}

.login-title {
  font-size: 16px;
  margin-left: 50px;
}

</style>
