<template>
<div class="bg">
  <div class="signin">
			<div class="signin-head"><img src="./assets/bg/login/user3-128x128.jpg" alt="" class="img-circle"></div>
			<form class="form-signin" role="form" @submit.stop.prevent="login">
				
        <input type="text" class="form-control" placeholder="用户名" required autofocus 
          oninvalid="setCustomValidity('请输入用户名')" oninput="setCustomValidity('')"
          onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="userName"/>
				
        <input type="password" class="form-control" placeholder="密码"  required
          oninvalid="setCustomValidity('请输入密码')" oninput="setCustomValidity('')"
          onkeyup="this.value=this.value.replace(/\s+/g,'')" v-model="password"/> 
				
        <button class="btn btn-lg btn-warning btn-block" type="submit">登录</button>
				
        <label class="checkbox">
					<input type="checkbox" value="remember-me" v-model="rememberMe"> 记住我
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
        userName: '',
        password: '',
        rememberMe: false
      }
    },
    mounted () {
      this.$store.commit(types.TITLE, 'Login')
      $('.bg').height($(window).height())
    },
    methods: {
      login () {
        var self = this
        var http = this.axios.create({
          timeout: 1000 * 30,
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })

        http.interceptors.request.use(config => {
          config.headers['my'] = '123'
          return config
        })

        http.post('api/user/login.do', {
          'userName': self.userName,
          'password': self.md5(self.password)
        }).then(function (res) {
          if (res.data.code !== 200) {
            self.$toast.warn({
              title: '登录失败',
              message: res.data.message
            })
          } else {
            self.$toast.removeAll()
            self.$store.commit(types.LOGIN, '123')
            let redirect = decodeURIComponent(self.$route.query.redirect || '/user')
            self.$router.push({
              path: redirect
            })
          }
        }).catch(function (err) {
          console.log(err)
        })
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
.checkbox {
  margin-left: 20px;
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