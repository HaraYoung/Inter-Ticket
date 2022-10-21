<template>
  <swiper-slide class="swiper-slide">
    <div class="detail-box">
      <h2 class="bold">{{ item.title }}</h2>
      <p class="bold">{{ item.start_date }} ~ {{ item.end_date }}</p>
      <p>{{ item.location }}</p>
      <button class="btn btn-secondary" @click="goTo('detail-page')">
        자세히보기
      </button>
    </div>
    <div class="img-box">
      <img :src="item.posterUrl" />
    </div>
  </swiper-slide>
</template>

<style scoped>
.bold {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.swiper-slide {
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  /* grid-gap: 20px; */
  /* padding: 60px 100px; */
  padding: 60px 0;
}

.detail-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  word-break: keep-all;
  padding-left: 100px;
  padding-right: 80px;
}

.img-box {
  padding-right: 100px;
}

.img-box img {
  width: 100%;
}
</style>

<script>
import { SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  props: {
    item: Object,
  },
  components: {
    SwiperSlide,
  },
  methods: {
    goTo(routeName) {
      this.$router
        .push({
          name: routeName,
        })
        .catch(() => {});
    },
  },
};
</script>
