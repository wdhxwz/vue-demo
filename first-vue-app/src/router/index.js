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
import Frame from '@/Frame'
import BookDetail from '@/books/Detail'

Vue.use(Router) 

export default new Router({

  // 路由模式：
  // history --> http://localhost/home
  // hash(default) --> http://localhost/#home
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame,
      children:[
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
        }
      ]
    },
    {
      path: '/helloworld',
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
    ,
    {
      path: '/bookdetail/:id',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
