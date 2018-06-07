

<template>
    <div>
        <h1> {{ title }}</h1>

        <!-- https://www.cnblogs.com/changxue/p/8521140.html -->
        <!-- v-bind:key="todo.value" -->
        <ul class="todos">
            <!-- v-for指令不仅可以循环数组，也可以循环属性 -->
            <!-- v-bind:class 样式绑定，json对象的值一定为布尔值，true表示加上样式，false表示移除样式 -->
            <!-- v-bind:style 样式绑定，json对象为样式配置项，key为具体属性，value为具体属性的值 -->
            <li v-for="(todo,index) in todos" v-bind:class="{'checked': todo.done}">
                <label>{{index + 1}}.{{ todo.value }}</label>
                
                <!--时间格式化专用的包:moment.js  npm i moment -S -->
                <time>{{todo.created | date }}</time>
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment'
    import 'moment/locale/zh-cn'
    moment.locale('zh-cn')

    export default {
        data(){
            return {
                title: 'vue-todos',
                todos: [
                    {
                        value: '阅读一本vue入门书籍',
                        done: false,
                        created: new Date(1525918210000)
                    },
                    {
                        value: '整理前端相关编码规范',
                        done: false,
                        created: new Date() + 300000
                    },
                    {
                        value: '记录相关知识点',
                        done: true,
                        created: new Date() - 30000000
                    }
                ]
            }
        },
        filters:{
            date(val){
                return moment(val).calendar()
                // format('YYYY-MM-DD HH:mm:ss')
            }
        }
    }
</script>



