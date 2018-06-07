<template>
    <!-- Horizontal Form -->
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">表单</h3>
        </div>
        <!-- /.box-header -->
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline :label-width="80">
            <div class="box-body">
                <FormItem prop="user" label="用户名">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                    </Input>
                </FormItem>
                <FormItem prop="password" label="密码">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    </Input>
                </FormItem>
            </div>
    
            <div class="box-footer">
                <button type="submit" class="btn btn-default" @click="handleSubmit('formInline')">Cancel</button>
                <button type="submit" class="btn btn-primary pull-right">Sign in</button>
            </div>
        </Form>
        <!-- form start -->
        <!-- <Form :model="formInline" class="form-horizontal">
                  <div class="box-body">
                    <div class="form-group col-sm-3">
                      <label for="inputEmail3" class="control-label">需求名称</label>
                      <div class="">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputPassword3" class="col-sm-1 control-label">Password</label>
                      <div class="col-sm-2">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                      </div>
                    </div>
                    
                  </div> -->
        <!-- /.box-body -->
        <!-- <div class="box-footer">
                    <button type="submit" class="btn btn-default" @click="handleSubmit('formInline')">Cancel</button>
                    <button type="submit" class="btn btn-primary pull-right">Sign in</button>
                  </div> -->
        <!-- /.box-footer -->
        <!-- </Form> -->
    </div>
    <!-- /.box -->
</template>

<script>
    export default {
        name: 'MyBasicForm',
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: 'Please fill in the user name',
                        trigger: 'blur'
                    }],
                    password: [{
                            required: true,
                            message: 'Please fill in the password.',
                            trigger: 'blur'
                        },
                        {
                            type: 'string',
                            min: 6,
                            message: 'The password length cannot be less than 6 bits',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                alert(11)
                console.log(this)
                this.$Message.error('This is an error tip');
                // this.$refs[name].validate((valid) => {
                //     if (valid) {
                //         this.$Message.success('Success!');
                //     } else {
                //         this.$Message.error('Fail!');
                //     }
                // })
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>
