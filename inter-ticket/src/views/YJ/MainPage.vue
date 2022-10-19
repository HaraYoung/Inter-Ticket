<template>
  <div id="main">
    <b-container id="main-slide">
      <swiper class="swiper" :options="swiperOption">
        <SlideBox v-for="item in exhibitionList" :key="item.id" :item="item" />
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </b-container>
    <b-container id="wrapper">
      <h2 class="mb-5">한 눈에 둘러보기</h2>
      <b-container id="content-box" class="p-5">
        <TabMenu :tabMenu="tabMenu" />
        <!-- 이 부분은 라우터로 만들까? -->
        <div class="grid">
          <CategoryBox
            v-for="item in exhibitionList"
            :key="item.id"
            :item="item"
          />
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#main {
  width: 1130px;
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
import CategoryBox from "./CategotyBox.vue";

import tempData from "@/assets/tempData.json";
const exhibitionList = tempData.exhibitionList;

export default {
  name: "MainPage",
  components: {
    Swiper,
    SlideBox,
    TabMenu,
    CategoryBox,
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
        autoplay: {
          delay: 3000,
        },
      },
      tabMenu: [
        {
          id: 0,
          name: "연극",
        },
        {
          id: 1,
          name: "뮤지컬",
        },
        {
          id: 2,
          name: "클래식/오페라",
        },
        {
          id: 3,
          name: "무용",
        },
        {
          id: 4,
          name: "국악/복합",
        },
        {
          id: 5,
          name: "아동",
        },
        {
          id: 6,
          name: "오픈런",
        },
      ],
      exhibitionList,
    };
  },
};
</script>