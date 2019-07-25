import Vue from 'vue'
import Router from 'vue-router'
import UserPane from './views/UserPane.vue'
import ManagePane from './views/ManagePane.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      name: 'UserPane',
      component: () => import('./views/UserPane.vue')
    },
    {
      path: '/manager',
      name: 'ManagePane',
      component: () => import('./views/ManagePane.vue')
    }
  ]
})
