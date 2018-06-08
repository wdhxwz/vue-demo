import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Starter from '@/components/Starter'

// 引入页面
import Home from '@/Home'
import Cart from '@/Cart'
import Explorer from '@/Explorer'
import Me from '@/Me'

Vue.use(Router)

export default new Router({

  // 路由模式：
  // history --> http://localhost/home
  // hash(default) --> http://localhost/#home
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/explorer',
      name: 'Explorer',
      component: Explorer
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/starter',
      name: 'Starter',
      component: Starter
    }
  ]
})
