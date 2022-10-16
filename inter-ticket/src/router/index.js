import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainPage from "../views/YJ/MainPage.vue"
import MyPage from "../views/YJ/MyPage.vue"
import ReserveView from "../views/YJ/ReserveView.vue"
import ReviewView from "../views/YJ/ReviewView.vue"

import Detail from '../views/SY/detailContainer.vue'
import GalleryInfo from '../views/SY/GalleryInfo.vue'
import GalleryPlace from '../views/SY/GalleryPlace.vue'
import GalleryReview from '../views/SY/GalleryReview.vue'
import TicketInformation from '../views/SY/TicketInformation.vue'


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
        redirect: 'detail/gallery-info',
        children: [
          {
            path: 'gallery-info',
            name: 'info',
            component: GalleryInfo
          },
          {
            path: 'gallery-place',
            name: 'place',
            component: GalleryPlace
          },
          {
            path: 'gallery-review',
            name: 'review',
            component: GalleryReview
          },
          {
            path: 'ticket-information',
            name: 'help',
            component: TicketInformation
          },
        ]
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
