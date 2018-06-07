<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">表格</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <div class="dataTables_wrapper form-inline dt-bootstrap">
  
        <div class="dataTables_filter">
          <label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="example1"></label>
        </div>
  
        <div class="row">
          <div class="col-sm-12">
            <Table border :columns="columns1" :data="data" class="table table-bordered table-striped dataTable">
                
            </Table>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-right">
            <Page :total="100" :page-size="10" show-sizer show-elevator @on-change="changePageNum" @on-page-size-change="changePageSize"></Page>
          </div>
        </div>
      </div>
    </div>
    <!-- /.box-body -->
    <MyModals :data="modalsdata" :visible="modalsVisible" />
  </div>
</template>

<script>
  import * as subpub from '../../utils/subpub';
  import MyModals from '../modals/MyModals';
  export default {
    name: 'MyTable',
    components: {
      MyModals
    },
    data() {
      return {
        columns1: [{
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '日期',
            key: 'date'
          },
          {
            title: '操作',
            key: 'action',
            width: 250,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      // 改变弹窗状态
                      this.changeModalsVisible(true);
                      this.modalsdata = params;
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data: [{
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        modalsVisible: false,
        modalsdata: {},
      }
    },
    created() {
      subpub.on('changeModalsVisible');
    },
    methods: {
      show(index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
        })
      },
      remove(index) {
        this.data.splice(index, 1);
      },
      changePageNum(pageNum) {
        alert('即将切换到第' + pageNum + '页');
      },
      changePageSize(pageSize) {
        alert('每页数据改变为：每页' + pageSize + '条')
      },
      changeModalsVisible(visible) {
        this.modalsVisible = visible;
      }
    }
  }
</script>
