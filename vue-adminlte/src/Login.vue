<template>
  <div class="container">
    <form class="form-inline login-form" @submit.stop.prevent="login">
      <div class="form-group">
        <label for="token">token</label>
        <input type="password" class="form-control" id="token" placeholder="token" v-model="token">
      </div>
      <input type="submit" class="btn btn-default"/>
    </form>
  </div>
</template>

<script >
  import * as types from './store/types'
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
    },
    methods: {
      login () {
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
  .login-form{
    width: 400px;
    margin: 50px auto;
  }
</style>