import VueRouter from 'vue-router'
import Vue from 'vue'

import Editable from '@/components/Editable/Editable.vue'
import TodoList from '@/components/TodoList/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/todolist'
  },
  {
    path: '/editable',
    component: Editable
  },
  {
    path: '/todolist',
    component: TodoList
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active-link',
  routes
})

export default router
