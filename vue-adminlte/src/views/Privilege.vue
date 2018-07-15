<template>
<div class="box">
    <div class="box-header with-border">
        <!-- 搜索条件 -->
        <form action="" class="form-inline">
            <div class="input-group" style="width:220px;">
                <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                </div>
                <input type="text" class="form-control pull-right" name="daterange" readonly="readonly">
            </div>
            <div class="form-group">
                <label for="">姓名：</label>
                <input type="text" class="form-control" placeholder="姓名">
            </div>
            <div class="form-group">
                <label for="">项目：</label>
                <select class="form-control">
                    <option value="0">全部</option>
                    <option value="1">项目1</option>
                    <option value="2">项目2</option>
                    <option value="3">项目13</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-default">查询</button>
            </div>   
            <div class="form-group">
                <button class="btn btn-primary" data-toggle="modal" data-target="#modal">新增</button>
            </div>             
        </form>
    </div>
    
    <div class="box-body">
        <table class="table table-bordered table-striped table-condensed">
            <thead>
                <tr>
                    <th>项目</th>
                    <th>权限名称</th>
                    <th>权限ID</th>
                    <th>权限URL</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.privilegeId">
                    <td>{{item.projectName}}</td>
                    <td>{{item.privilegeName}}</td>
                    <td>{{item.privilegeId}}</td>
                    <td>{{item.privilegeUrl}}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-default">修改</button>
                        <button type="button" class="btn btn-sm btn-success">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <pagination :pagination="pagination" :callback="loadData" :options="paginationOptions" size="default"></pagination>
    </div>
</div>
</template>

<script>
    import pagination from 'vue-bootstrap-pagination'
    export default {
      name: 'privilege',
      data () {
        return {
          items: [
            {
              'projectName': '测试项目1',
              'privilegeName': '项目新增',
              'privilegeId': '112',
              'privilegeUrl': '/project/add'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            }
          ],
          pagination: {
            total: 102,
            per_page: 10,    // required
            current_page: 1, // required
            last_page: 11,    // required
            from: 1,
            to: 10
          },
          paginationOptions: {
            offset: 8,
            previousText: '上一页',
            nextText: '下一页',
            alwaysShowPrevNext: false
          }
        }
      },
      methods: {
        loadData () {
        //   const options = {
        //     params: {
        //       paginate: this.pagination.per_page,
        //       page: this.pagination.current_page,
        //     }
        //   };
        //   this.$http.get('/getData', options)
        //     .then(response => {
        //       this.items = response.data.data;
        //       this.pagination = response.data.pagination
        //     })
        //     .catch(error => {

        //   })
          this.items = [
            {
              'projectName': '测试项目1',
              'privilegeName': '项目新增',
              'privilegeId': '112',
              'privilegeUrl': '/project/add'
            },
            {
              'projectName': '测试项目1',
              'privilegeName': '项目编辑',
              'privilegeId': '113',
              'privilegeUrl': '/project/edit'
            }
          ]
        }
      },
      components: {
        pagination
      }
    }
</script>

<style scoped>
tr > td,tr > th{
    text-align: center;
}

nav {
    float: right;
}
</style>
