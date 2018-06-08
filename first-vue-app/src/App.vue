<!-- 视图模板 -->
<template>
  <div id="app">
    <!-- <div class="tabs">
      <ul>
          <router-link :to="{name : 'Home'}" tag="li" active-class="active">
            <div><img src="./assets/images/home.svg"></div>
            <div>首页</div>
          </router-link>

          <router-link :to="{name : 'Explorer'}" tag="li">
            <div><img src="./assets/images/category.svg"></div>
            <div>分类</div>
          </router-link>

          <router-link :to="{name : 'Cart'}" tag="li">
            <div><img src="./assets/images/cart.svg"></div>
            <div>购物车</div>
          </router-link>

          <router-link :to="{name : 'Me'}" tag="li">
            <div><img src="./assets/images/me.svg"></div>
            <div>我的</div>
          </router-link>
      </ul>
    </div> -->

    <div class="content">
      <!-- <router-view/> 渲染路径匹配到的视图组件，可以嵌套 -->
      <!-- <router-link> 支持用户在具有路由功能的应用中导航 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<!-- 组件定义 -->
<script>
export default {
  name: 'App'
}
</script>

<!-- 组件样式 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
