<template>
  <swiper-slide class="swiper-slide">
    <!-- 전시 정보 -->
    <div class="detail-box">
      <h2 class="bold">{{ item.DP_NAME }}</h2>
      <p class="bold">{{ item.DP_START }} ~ {{ item.DP_END }}</p>
      <p>{{ item.DP_PLACE }}</p>
      <b-button class="mt-5" @click="goTo('/detail')"> 자세히보기 </b-button>
    </div>
    <!-- 전시 정보 -->
    <!-- 전시 포스터 -->
    <div class="img-box">
      <img :src="item.DP_MAIN_IMG" />
    </div>
    <!-- 전시 포스터 -->
  </swiper-slide>
</template>

<style scoped>
.bold {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.swiper-slide {
  padding: 60px 100px;
  display: flex;
  justify-content: space-around;
}

.detail-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-width: 400px;
  margin-top: 80px;

  word-break: keep-all;
  color: white;
}

.img-box img {
  width: 280px;
  height: 350px;
  object-fit: cover;
}

button {
  font-size: 18px;
  padding: 0.5em 1em;
}
</style>

<script>
import { swiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    item: Object,
  },
  components: {
    swiperSlide,
  },
  methods: {
    //클릭 시 전시 정보에 해당하는 상세 페이지로 이동하는 함수
    goTo(pathName) {
      this.$router
        .push({
          path: pathName + "/" + this.item.DP_SEQ,
        })
        .catch(() => {});
    },
  },
};
</script>
