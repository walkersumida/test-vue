import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TasksIndex from '@/components/tasks/Index'
import TasksNew from '@/components/tasks/New'
import TasksShow from '@/components/tasks/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: TasksIndex
    },
    {
      path: '/tasks/new',
      name: 'New Task',
      component: TasksNew
    },
    {
      path: '/tasks/:id',
      name: 'Show Task',
      component: TasksShow
    }
  ]
})
