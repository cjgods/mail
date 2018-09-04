import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import pobing from '@/pages/pobing'
import question from '@/pages/question'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/pobing',
      name: 'pobing',
      component: pobing
    },
    {
      path: '/question',
      name: 'question',
      component: question
    }
  ]
})
