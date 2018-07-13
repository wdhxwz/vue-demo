<template>
<div class="wrapper">
  <!-- 头部区域 -->
  <header class="main-header">
    <!-- logo -->
    <a href="#" class="logo">
      <span class="logo-lg">权限管理中心</span>
    </a>

    <!-- 头部导航栏 -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- 侧边栏切换-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- 导航栏菜单 -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- 用户信息 -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <!-- 用户头像-->
              <img src="../assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <!-- 用户名称 -->
              <span class="hidden-xs">Krista</span>
            </a>
          </li>
          <!-- 退出登录 -->
          <li>
            <a href="#" data-toggle="control-sidebar" @click="logout"><i class="fa fa-sign-out"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- 左边菜单部分 -->
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <!-- <li class="header"></li>  -->
        <!-- 菜单数据 -->
        <li :class="{'active':isCurrentMenu('user')}" @click="setMenu('menu1','用户管理')">
          <router-link to='/user'>
            <i class="fa fa-circle-o"></i> <span>用户管理</span>
          </router-link>
        </li>
        <li :class="{'active':isCurrentMenu('privilege')}" @click="setMenu('menu2','功能管理')">
          <router-link to='/privilege'>
            <i class="fa fa-circle-o"></i> <span>功能管理</span>
          </router-link>
        </li>

        <li :class="{'active':isCurrentMenu('role')}" @click="setMenu('menu3','角色管理')">
             <router-link to='/role'>
            <i class="fa fa-circle-o"></i> <span>角色管理</span>
          </router-link>
          </a>
        </li>
      </ul>
    </section>
  </aside>

  <!-- 内容区域 -->
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        {{ headTitle }}
      </h1>
      <!-- 面包屑 -->
      <!--
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>用户管理</a></li>
        <li class="active">用户列表</li>
      </ol>
      -->
    </section>

    <!-- 主题内容 -->
    <section class="content container-fluid">
      <div>
        <router-view></router-view>
      </div>
    </section>
  </div>

  <!--页脚部分 -->
  <footer class="main-footer">
    <!-- Default to the left -->
    <strong>Copyright &copy; 2018 <a href="http://www.krista520.cn">Krista</a>.</strong> All rights reserved.
  </footer>
  <div class="control-sidebar-bg"></div>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeMenu: 'user',
      headTitle: '用户管理'
    }
  },
  methods: {
    setMenu: function (menuId, headTitle) {
      this.activeMenu = menuId
      this.headTitle = headTitle
    },
    isCurrentMenu: function (menuId) {
      if (this.activeMenu) {
        return this.activeMenu === menuId
      } else {
        this.activeMenu = menuId

        return true
      }
    },
    logout: function () {
      window.localStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted: function () {
    window.$(window).resize()
    this.activeMenu = this.$route.name
    this.headTitle = this.$route.meta.headTitle
  }
}
</script>
