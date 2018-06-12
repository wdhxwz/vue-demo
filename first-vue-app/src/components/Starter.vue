<template>
<div class="wrapper">

  <!-- 头部信息 -->
  <header class="main-header">

    <!-- 项目Logo或名称 -->
    <a href="#" class="logo">
      <span class="logo-lg">XXX管理后台</span>
    </a>

    <!-- 菜单栏 -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- 侧边栏切换按钮-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <!-- 导航栏 右边按钮 -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- 账号菜单 -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <!-- 账号头像 -->
              <img src="../assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
              
              <!-- 账号名字 -->
              <span class="hidden-xs">Alexander Pierce</span>
            </a>
          </li>
         
         <!-- 退出登录图标 -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-sign-out"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>


  <!-- 左侧边栏 -->
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- 菜单 -->
      <ul class="sidebar-menu">
        <li class="header">菜单</li>       
        <li class="active">
          <a href="#">
            <i class="fa fa-link"></i> Link
          </a>
        </li>

        <li><a href="#"><i class="fa fa-link"></i> Another Link</a></li>
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i>Multilevel
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#">Link in level 2</a></li>
            <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>

  <!-- 内容部分 -->
  <div class="content-wrapper" style="margin:0px;padding: 0px;">
    <section class="content-header">
      <h1>
        用户管理
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>用户管理</a></li>
        <li class="active">用户列表</li>
      </ol>
    </section>

    <!-- 主要内容 -->
    <section class="content container-fluid">
      <div>
        我是存放内容的
      </div>
    </section>
  </div>


  <!-- 页脚 -->
  <footer class="main-footer" style="margin:0px;">
    <div class="pull-right hidden-xs">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2018 <a href="#">Krista</a>.</strong> All rights reserved.
  </footer>
  <!-- <div class="control-sidebar-bg"></div> -->
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>