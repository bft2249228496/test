import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import home1 from '@/page/home1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home1',
      component: home1
    }
  ]
})
