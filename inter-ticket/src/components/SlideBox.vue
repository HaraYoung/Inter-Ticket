<template>
  <swiper-slide class="swiper-slide">
    <div class="detail-box">
      <h2 class="bold">{{ item.title._text }}</h2>
      <p class="bold">{{ item.startDate._text }} ~ {{ item.endDate._text }}</p>
      <p>{{ item.place._text }}</p>
      <button class="btn btn-secondary" @click="goTo('detail-page')">
        자세히보기
      </button>
    </div>
    <div class="img-box">
      <img :src="item.thumbnail._text" />
    </div>
  </swiper-slide>
</template>

<style scoped>
.bold {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.swiper-slide {
  padding: 60px 100px;
  padding: 60px 0;
  display: flex;
  justify-content: space-around;
}

.detail-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-width: 400px;

  word-break: keep-all;
}

.img-box img {
  width: 280px;
  height: 350px;
  object-fit: cover;
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
