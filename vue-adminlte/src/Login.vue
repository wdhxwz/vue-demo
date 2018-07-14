<template>
<div class="bg">
  <div class="signin">
			<div class="signin-head"><img src="./assets/bg/login/user3-128x128.jpg" alt="" class="img-circle"></div>
			<form class="form-signin" role="form" @submit.stop.prevent="login">
				<input type="text" class="form-control" placeholder="用户名" required autofocus />
				<input type="password" class="form-control" placeholder="密码"  required/> <!-- -->
				<button class="btn btn-lg btn-warning btn-block" type="submit">登录</button>
				<label class="checkbox">
					<input type="checkbox" value="remember-me"> 记住我
				</label>
			</form>
		</div>
</div>
</template>

<script >
  import * as types from './store/types'
  import $ from 'jquery'
  export default {
    name: '',
    data () {
      return {
        msg: '',
        token: ''
      }
    },
    mounted () {
      this.$store.commit(types.TITLE, 'Login')
      $('.bg').height($(window).height())
    },
    methods: {
      login () {
        this.token = '123'
        if (this.token) {
          this.$store.commit(types.LOGIN, this.token)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/user')
          this.$router.push({
            path: redirect
          })
        } else {
          alert('请输入token')
        }
      }
    }
  }
  // https://github.com/liujians/vue-adminLte-vue-router
</script>

<style scoped >
html,body {
  height: 100%;
}

.bg {
	background:url(./assets/bg/login/login_bg_0.jpg) #f8f6e9 0 0 no-repeat;
  background-size: cover;
}

.signin {
	width:477px;
	height:479px;
	background:url(./assets/bg/login/login_bg.png) no-repeat;
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
.form-signin {
  max-width: 330px;
  padding: 43px 15px 15px 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: 14px;
  border-radius: 0;
  background: url(./assets/bg/login/login_user.png) 0 0 #bdbdbd no-repeat;
  padding-left:60px;
  color:#FFFFFF;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-radius: 0;
  background: url(./assets/bg/login/login_pas.png) 0 0 #bdbdbd no-repeat;
  padding-left:60px;
  color:#FFFFFF;
}
.form-signin button {
  border-radius: 0;
}

</style>