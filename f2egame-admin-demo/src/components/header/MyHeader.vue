<template>
  <header class="main-header">
  
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
  
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="user" v-if="userInfo">
            <a><i class="fa fa-user-circle"></i>{{userInfo.nickName}}</a>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a @click="logout">注销
                <i class="fa fa-sign-out"></i>
              </a>
          </li>
        </ul>
      </div>
  
    </nav>
  
  </header>
</template>

<script>
  export default {
    name: 'MyHeader',
    props: ['userInfo'],
    data() {
      return {}
    },
    created() {
    },
    computed: {
    },
    methods: {
      logout(){
        // console.log(Common.logout)
        Common.logout()
      }
    }
  }
</script>


