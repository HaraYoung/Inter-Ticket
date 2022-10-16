<template>
  <swiper-slide class="swiper-slide">
    <div class="detail-box">
      <p>{{ item.location }}</p>
      <h2 class="bold">{{ item.title }}</h2>
      <p class="bold">{{ item.start_date }} ~ {{ item.end_date }}</p>
      <button class="btn btn-secondary">자세히보기</button>
    </div>
    <div class="img-box">
      <img :src="item.posterUrl" />
    </div>
  </swiper-slide>
</template>

<style scoped>
.bold {
  font-weight: bold;
}

.swiper-slide {
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  padding: 60px 100px;
}

.detail-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.img-box img {
  width: 100%;
}
</style>

<script>
import { SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    SwiperSlide,
  },
  props: {
    item: Object,
  },
};
</script>
