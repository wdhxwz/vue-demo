import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Firstcomponent from '@/components/firstcomponent'
import Secondcomponent from '@/components/secondcomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/first',
      name: 'Firstcomponent',
      component: Firstcomponent
    },{
      path: '/second',
      name: 'Secondcomponent',
      component: Secondcomponent
    }
  ]
})
