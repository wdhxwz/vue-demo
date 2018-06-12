<template>
<div class="wrapper">
  <!-- 头部区域 -->
  <header class="main-header">
    <!-- logo -->
    <a href="#" class="logo">
      <span class="logo-lg">XXX管理后台</span>
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
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-sign-out"></i></a>
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
        <li class="header">菜单</li>
        <!-- 菜单数据 -->
        <li :class="{'active':isCurrentMenu('menu1')}"><a href="#" @click="setMenu('menu1')"><i class="fa fa-link"></i> <span>用户管理</span></a></li>
        <li :class="{'active':isCurrentMenu('menu2')}"><a href="#"  @click="setMenu('menu2')"><i class="fa fa-link"></i> <span>功能管理</span></a></li>
        <li :class="{'treeview':true,'active':isCurrentMenu('menu3')}">
          <a href="#"  @click="setMenu('menu3')"><i class="fa fa-link" ></i> <span>权限管理</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#" @click="setMenu('menu3')">Link in level 2</a></li>
            <li><a href="#" @click="setMenu('menu3')">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>

  <!-- 内容区域 -->
  <div class="content-wrapper">
    <section class="content-header">
      <h1>
        页面标题
      </h1>
      <!-- 面包屑 -->
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>用户管理</a></li>
        <li class="active">用户列表</li>
      </ol>
    </section>

    <!-- 主题内容 -->
    <section class="content container-fluid">
     <div>我是存放内容的</div>
    </section>
  </div>

  <!--页脚部分 -->
  <footer class="main-footer">
    <!-- Default to the left -->
    <strong>Copyright &copy; 2018 <a href="#">Krista</a>.</strong> All rights reserved.
  </footer>
  <div class="control-sidebar-bg"></div>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeMenu :''
    }
  },
  methods: {
    setMenu:function(menuId){
      this.activeMenu = menuId;
    },
    isCurrentMenu:function(menuId){
      if(this.activeMenu){
        return this.activeMenu == menuId;
      }else{
        this.activeMenu = menuId;

        return true;
      }
    }
  }
}
</script>
