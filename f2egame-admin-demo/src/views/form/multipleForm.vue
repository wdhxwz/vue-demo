<template>
    <div class="row">
        <div class="col-sm-12">
    
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        表单页
                    </h3>
                </div>
                <Form ref="formInline" :model="formInline" inline :label-width="120">
                    <div class="box-body">
                        <div>
                            <b>个人信息</b>
                        </div>
                        <div class="row">
                            <FormItem label="姓名" class="col-sm-5">
                                <Input v-model="formInline.name" placeholder="请输入姓名"></Input>
                            </FormItem>
                            <FormItem label="账号" class="col-sm-5">
                                <Input v-model="formInline.name" placeholder="请输入账号"></Input>
                            </FormItem>
                            <FormItem label="性别" class="col-sm-5">
                                <RadioGroup v-model="formInline.radio">
                                    <Radio label="male">Male</Radio>
                                    <Radio label="female">Female</Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="出生日期" class="col-sm-5">
                                <DatePicker type="date" style="width: 100%" placeholder="Select date" v-model="formInline.date"></DatePicker>
                            </FormItem>
                            <FormItem label="邮箱" prop="mail" class="col-sm-5">
                                <Input v-model="formInline.mail" placeholder="Enter your e-mail">
                                    <Icon type="at" slot="prepend"></Icon>
                                </Input>
                            </FormItem>
                        </div>
                        <hr>
                        <div>
                            <b>住址</b>
                        </div>
                        <div class="row">
                            <FormItem label="地址" class="col-sm-5">
                                <Cascader :data="address" :load-data="loadData" v-model="formInline.address"></Cascader>
                            </FormItem>
                            <FormItem label="账号" class="col-sm-5">
                                <Input v-model="formInline.name" placeholder="请输入账号"></Input>
                            </FormItem>
                            <FormItem label="性别" class="col-sm-5">
                                <RadioGroup v-model="formInline.radio">
                                    <Radio label="male">Male</Radio>
                                    <Radio label="female">Female</Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem label="出生日期" class="col-sm-5">
                                <DatePicker type="date" style="width: 100%" placeholder="Select date" v-model="formInline.date"></DatePicker>
                            </FormItem>
                        </div>
                        <hr>
                        <div>
                            <b>住址</b>
                        </div>
                    </div>
    
                    <div class="box-footer">
                        <button type="submit" class="btn btn-default" @click="handleSubmit('formInline')">Cancel</button>
                        <button type="submit" class="btn btn-primary pull-right">Sign in</button>
                    </div>
                </Form>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    name: '',
                    select: '',
                    radio: 'male',
                    address: [],
                    checkbox: [],
                    mail: '',
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                address: [{
                        value: 'beijing',
                        label: '北京',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [],
                        loading: false
                    }
                ]
            }
        },
        methods: {
            loadData(item, callback) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'beijing') {
                        item.children = [{
                                value: 'talkingdata',
                                label: 'TalkingData'
                            },
                            {
                                value: 'baidu',
                                label: '百度'
                            },
                            {
                                value: 'sina',
                                label: '新浪'
                            }
                        ];
                    } else if (item.value === 'hangzhou') {
                        item.children = [{
                                value: 'ali',
                                label: '阿里巴巴'
                            },
                            {
                                value: '163',
                                label: '网易'
                            }
                        ];
                    }
                    item.loading = false;
                    callback();
                }, 1000);
            }
        }
    }
</script>
