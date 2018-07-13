import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starter from '@/components/starter'
import store from '../store/store'
import * as types from '../store/types'
import Login from '../login.vue'
import User from '../views/User'
import Privilege from '../views/Privilege'
import Role from '../views/Role'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'starter',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: starter,
      // 二级路由配置
      children: [
        {
          path: '/user',
          name: 'user',
          component: User,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/privilege',
          name: 'privilege',
          component: Privilege,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/role',
          name: 'role',
          component: Role,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
