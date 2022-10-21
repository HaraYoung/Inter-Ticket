<template>
  <div id="main">
    <v-container id="main-slide">
      <swiper class="swiper" :options="swiperOption">
        <SlideBox v-for="item in exhibitionList" :key="item.id" :item="item" />
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-container>
    <v-container id="wrapper">
      <h2 class="mb-5">한 눈에 둘러보기</h2>
      <v-container id="content-box" class="p-5">
        <TabMenu :tabMenu="tabMenu" />
        <!-- 이 부분은 라우터로 만들까? -->
        <router-view></router-view>
      </v-container>
    </v-container>
  </div>
</template>

<style scoped>
#main {
  max-width: 1130px;
  width: 100%;
  margin: 80px auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 100px);
}

#main-slide {
  background: linear-gradient(#e6d5ae 70%, #bab7a4 30%);
}

#wrapper {
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: white;
  width: 95%;
}

h2 {
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import { Swiper } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import SlideBox from "../../components/SlideBox.vue";
import TabMenu from "../../components/TabMenu.vue";

import tempData from "@/assets/tempData.json";
const exhibitionList = tempData.exhibitionList;

export default {
  name: "MainPage",
  components: {
    Swiper,
    SlideBox,
    TabMenu,
  },
  data: function () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //   delay: 3000,
        // },
      },
      tabMenu: [
        {
          id: 0,
          name: "연극",
          routeName: "drama-tab",
        },
        {
          id: 1,
          name: "콘서트/뮤지컬",
          routeName: "concert-tab",
        },
        {
          id: 2,
          name: "무용",
          routeName: "dance-tab",
        },
        {
          id: 3,
          name: "미술",
          routeName: "art-tab",
        },
        {
          id: 4,
          name: "기타",
          routeName: "etc-tab",
        },
      ],
      exhibitionList,
      list: [],
    };
  },
};
</script>