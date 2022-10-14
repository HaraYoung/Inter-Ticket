import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from "../components/MainPage.vue"

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'main',
        name: 'main',
        component: MainPage,
      },
      // {
      //   path: '',
      //   name: 'detail',
      //   component: '',
      //   children: [
      //     {
      //       path: '',
      //       name: 'info',
      //       component: ''
      //     },
      //     {
      //       path: '',
      //       name: 'place',
      //       component: ''
      //     },
      //     {
      //       path: '',
      //       name: 'review',
      //       component: ''
      //     },
      //     {
      //       path: '',
      //       name: 'help',
      //       component: ''
      //     },
      //   ]
      // },
      // {
      //   path: '',
      //   name: 'my',
      //   component: '',
      //   children: [
      //     {
      //       path: '',
      //       name: 'reserve',
      //       component: ''
      //     },
      //     {
      //       path: '',
      //       name: 'my-review',
      //       component: ''
      //     },
      //   ]
      // },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
