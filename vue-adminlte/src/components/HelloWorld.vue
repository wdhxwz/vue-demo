<template>
  <div class="hello" id="msg">
    <h1><i class='fa fa-fw fa-amazon'></i>{{ msg }}</h1>
    <!-- Button trigger modal --> 
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Launch demo modal
    </button>

    <br/>
    <br/>
    <button class="btn btn-primary" type="button" @click="send">请求</button>

<!-- Modal --> 
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    send: function () {
      console.log('开始发送请求......')
      this.axios.get('http://127.0.0.1:9090/api/getUserInfo.do')
      .then(function (res) {
        console.log(res.config)
        console.log(res.data)
        console.log(res.headers)
        console.log(res.request)
        console.log(res.status)
        console.log(res.statusText)
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
