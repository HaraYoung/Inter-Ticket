<!-- 파일 이름: CategoryBox.vue -->
<!-- 파일 설명: 메인 페이지 하단의 한눈에 둘러보기 내부 전시 정보 컴포넌트 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div class="category-box" @click="goTo('/detail')">
    <!-- 전시 포스터 -->
    <div class="poster">
      <img :src="item.dp_main_img" />
    </div>
    <!-- 전시 포스터 -->
    <!-- 전시 간략 정보 -->
    <div class="desc">
      <p class="bold title text-truncate">
        {{ item.dp_name }}
      </p>
      <p class="bold">{{ filteredStart }} ~ {{ filteredEnd }}</p>
      <p>{{ item.p_name }}</p>
    </div>
    <!-- 전시 간략 정보 -->
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    goTo(pathName) {
      this.$router.push({
        path: pathName + "/" + this.item.dp_seq,
      });
    },
  },
  computed: {
    filteredStart() {
      return this.item.dp_start.slice(0, 10);
    },
    filteredEnd() {
      return this.item.dp_end.slice(0, 10);
    },
  },
};
</script>

<style scoped>
.category-box {
  width: 243px;
  padding: 20px 10px;

  border-bottom: 1px solid #5c636a;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
}

.poster img {
  width: 203.67px;
  height: 287px;
}

.desc {
  width: 100%;
  padding: 10px;

  display: block;
}

.bold {
  font-weight: bold;
}
</style>
