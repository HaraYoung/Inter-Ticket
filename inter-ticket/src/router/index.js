import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainPage from "../views/YJ/MainPage.vue"
import MyPage from "../views/YJ/MyPage.vue"
import ReserveView from "../views/YJ/ReserveView.vue"
import ReviewView from "../views/YJ/ReviewView.vue"

import Detail from '../views/SY/detailContainer.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'home',
    redirect: '/main',
    component: HomeView,
    children: [
      {
        path: 'main',
        name: 'main-page',
        component: MainPage,
      },
      {
        path: 'detail',
        name: 'detail-page',
        component: Detail,
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
      },
      {
        path: 'mypage',
        name: 'my-page',
        redirect: 'mypage/my-ticket',
        component: MyPage,
        children: [
          {
            path: 'my-ticket',
            name: 'my-ticket-list',
            component: ReserveView
          },
          {
            path: 'my-review',
            name: 'my-review-list',
            component: ReviewView
          },
        ]
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
