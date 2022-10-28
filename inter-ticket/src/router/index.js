import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainPage from "../views/YJ/MainPage.vue"
import MyPage from "../views/YJ/MyPage.vue"
import SearchPage from "../views/YJ/SearchPage.vue"
import TicketConfirmPage from "../views/YJ/TicketConfirmPage.vue"

import Detail from '../views/SY/detailContainer.vue'
import GalleryInfo from '../views/SY/GalleryInfo.vue'
import GalleryPlace from '../views/SY/GalleryPlace.vue'
import GalleryReview from '../views/SY/GalleryReview.vue'
import TicketInformation from '../views/SY/TicketInformation.vue'

// import Test from "../views/SY/testView.vue";


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
        path: 'detail/:id',
        name: 'detail-page',
        component: Detail,
        redirect: 'detail/:id/gallery-info',
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
        component: MyPage
      },
      {
        path: 'search',
        name: 'search-page',
        component: SearchPage,
      },
      //얘는 마이 페이지 children으로 들어가거나 혹은 활용하지 않는 것으로
      {
        path: 'my-ticket-confirm',
        name: 'my-ticket-confirm-page',
        component: TicketConfirmPage
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
