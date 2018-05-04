<!-- 展示模板 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/first">第1页</router-link></li>
      <li><router-link to="/second">第2页</router-link></li>
    </ul>

    <router-view/> -->
    <!-- <h1>{{message}}</h1> -->
    <NavMenu></NavMenu>
    <Container></Container>
  </div>
</template>

<script>

// 导入组件
import './components/common/style.scss'
import NavMenu from './components/common/NavMenu.vue'
import Container from './components/common/Container.vue'

export default {
  name: 'App',
  data(){
    return {
      message : 'hello world'
    }
  },
  components: {
    NavMenu,
    Container
  }
}
</script>

<!-- 样式代码 -->
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
