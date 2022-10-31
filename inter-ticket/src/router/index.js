import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MainPage from "../views/YJ/MainPage.vue"
import MyPage from "../views/YJ/MyPage.vue"
import SearchPage from "../views/YJ/SearchPage.vue"

import Detail from '../views/SY/detailContainer.vue'
import GalleryInfo from '../views/SY/GalleryInfo.vue'
import GalleryPlace from '../views/SY/GalleryPlace.vue'
import GalleryReview from '../views/SY/GalleryReview.vue'
import TicketInformation from '../views/SY/TicketInformation.vue'

Vue.use(VueRouter)

const routes = [
    {
      //기본 페이지
    path: '/',
    name: 'home',
    redirect: '/main',
    component: HomeView,
    children: [
      {
        //메인 페이지
        path: 'main',
        name: 'main-page',
        component: MainPage,
      },
      {
        //상세 페이지
        path: 'detail/:id',
        name: 'detail-page',
        component: Detail,
        redirect: 'detail/:id/gallery-info',
        children: [
          {
            //상세 페이지 - 전시 정보
            path: 'gallery-info',
            name: 'info',
            component: GalleryInfo
          },
          {
            //상세 페이지 - 전시 장소
            path: 'gallery-place',
            name: 'place',
            component: GalleryPlace
          },
          {
            //상세 페이지 - 관람평
            path: 'gallery-review',
            name: 'review',
            component: GalleryReview
          },
          {
            //상세 페이지 - 예매 안내
            path: 'ticket-information',
            name: 'help',
            component: TicketInformation
          },
        ]
      },
      {
        //마이 페이지
        path: 'mypage',
        name: 'my-page',
        component: MyPage
      },
      {
        //검색 결과 페이지
        path: 'search',
        name: 'search-page',
        component: SearchPage,
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
