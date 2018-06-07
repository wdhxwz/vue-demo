<template>
    <div class="layout">
        
        <MyHeader :userInfo="userInfo" />
        <aside class="main-sidebar">
            <sidebar-menu :router="router()" />
        </aside>
        <div class="content-wrapper">
            <bread-crumb/>
            <div class="content">
                <img src="./assets/logo.png"/>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/header/MyHeader.vue';
    import sidebarMenu from './components/sider/sidebarMenu.vue';
    import breadCrumb from './components/Breadcrumb';
    import permission from './utils/permission';
    import menuRouter from './routers/menu';
    import directive from './utils/directive'
    //export 导出了app组件
    export default {
        data() {
            return {
                isCollapsed: false,
                userInfo: null
            }
        },
        //声明了对于MyHeader,sidebarMenu,breadCrumb组件的引用
        components: {
            MyHeader,
            sidebarMenu,
            breadCrumb
        },
        //实例创建前：这个阶段实例的data、methods是读不到的
        beforeCreate() {
            f2eGame.port.udb.getUserInfo().then((res) => {
                this.userInfo = res;
            });
        },
        //实例被创建之后：这个阶段已经完成了数据观测(data observer)，
        //属性和方法的运算， watch/event 事件回调。
        //mount挂载阶段还没开始，$el 属性目前不可见，数据并没有在DOM元素上进行渲染
        created() {
            console.log(Common)
        },
        //这个状态下数据更新并且DOM重新渲染，
        //当这个生命周期函数被调用时，组件 DOM 已经更新，
        //所以你现在可以执行依赖于 DOM 的操作。
        //当实例每次进行数据更新时updated都会执行
        updated() {
    
        },
        methods: {
            router(){
                return permission.updateMenulist(menuRouter)
            },
        }
    }
</script>
