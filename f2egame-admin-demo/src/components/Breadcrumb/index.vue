<template>
    <section class="content-header">
      <h1 v-if="levelList.length>0">
          {{levelList[levelList.length-1].name}}
      </h1>
      <ol class="breadcrumb" separator="/">
        <li v-for="(item,index)  in levelList" :key="item.path" v-if='item.name'>
            <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.name}}</span>
            <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
        </li>
    </ol>
    </section>
  
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
    //   if (first && first.name !== 'indexpage') {
    //       matched = [{ path: '/', name: 'indexpage'}].concat(matched)
    //   }
      this.levelList = matched;
    }
  }
}
</script>
