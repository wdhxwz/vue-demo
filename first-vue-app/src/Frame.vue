<template>
<div>

    <!-- 导航栏 -->
    <tabs></tabs>

    <div class="content">
      <!-- <router-view/> 渲染路径匹配到的视图组件，可以嵌套 -->
      <!-- <router-link> 支持用户在具有路由功能的应用中导航 -->
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
   import Tabs from "./components/tabs.vue"
    import "./assets/less/site.less"
    export default {
        components: {Tabs}
    }
</script>