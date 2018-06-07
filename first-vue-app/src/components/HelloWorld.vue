<template>
  <div class="hello">
    <!-- 双大括号{{ }} 表示插值，会去 data 查找对应的属性 -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  // data可以是一个返回Object对象的函数
  // 也可以直接是一个对象
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 添加 "scoped" 属性以限制该CSS样式只应用于当前组件 -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
