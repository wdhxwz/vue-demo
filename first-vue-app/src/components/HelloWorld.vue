<template>
  <div class="hello">
    <!-- 双大括号{{ }} 表示插值，会去 data 查找对应的属性 -->
    <h1 id = "msg"><i class='fa fa-fw fa-amazon'></i>{{ msg }}</h1>

    <!-- bootstrap 内容 开始 -->

    <!-- 按钮 --> 
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      弹出框
    </button>

    <!-- 弹出层 --> 
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">标题</h4>
          </div>
          <div class="modal-body">
            内容区域
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>

     <!-- bootstrap 内容 结束 -->
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
