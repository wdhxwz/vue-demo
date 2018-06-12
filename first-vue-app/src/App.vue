<!-- 视图模板 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- 组件定义 -->
<script>
export default {
  name: 'App',
  watch:{
    // 监听路由改变
    '$route':function(to,from){
      console.log(to);
      console.log(from);
    }
  }
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
