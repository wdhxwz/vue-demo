<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a  href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    // 设置cookie
    this.$cookies.set('name','wangdh')

    // 获取所有cookie的key
    var keys = this.$cookies.keys()

    keys.forEach(key => {
      // 获取cookie的值
      console.log('key=' + this.$cookies.get(key))
    });

    // 状态值得读取和设置
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(this.$store.state.count)

    // 计算MD5
    console.log(this.md5('123456'))

    // base64编码
    var base64Code = this.Base64.encode('i am wangdh')
    console.log(base64Code)
    console.log(this.Base64.decode(base64Code))

    // qs
    console.log(this.qs.stringify({'name':'wangdh','age':'22'}))
    console.log(this.qs.parse('name=wangdh&age=22'))

    // lodash
    console.log(this.lodash.random(20))
    console.log(this.lodash.merge({'name':'wangdh'},{'age':'22'}))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
