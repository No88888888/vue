import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CreateView from '../views/CreateView.vue'
import DetailView from '../views/DetailView.vue'
import NotFound404View from '../views/NotFound404View.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/404-not-found',
    name: 'NotFound404View',
    component: NotFound404View
  },
  {
    path: '/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '*',
    redirect: { name: 'NotFound404View' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
