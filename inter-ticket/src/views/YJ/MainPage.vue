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
  </div>
</template>

<style scoped>
#main {
  background-color: #f0e7db;
  display: flex;
  align-items: center;

  min-height: calc(100vh - 200px);
}

#main-slide {
  background: linear-gradient(#e6d5ae 70%, #bab7a4 30%);
}
</style>

<script>
import { Swiper } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import SlideBox from "../../components/SlideBox.vue";

import tempData from "@/assets/tempData.json";
const exhibitionList = tempData.exhibitionList;

export default {
  name: "MainPage",
  components: {
    Swiper,
    SlideBox,
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
      exhibitionList,
    };
  },
};
</script>