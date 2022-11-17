<!-- 파일 이름: SearchBox.vue -->
<!-- 파일 설명: 검색 결과 페이지의 검색 결과 컴포넌트 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div id="search-box">
    <!-- 전시 포스터 -->
    <div class="poster">
      <img :src="item.dp_main_img" />
    </div>
    <!-- 전시 포스터 -->
    <!-- 전시 간략 정보 -->
    <div class="desc">
      <h4 class="bold text-truncate" @click="goTo('/detail')">
        {{ item.dp_name }}
      </h4>
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
    //클릭 시 해당 전시의 상세 페이지로 이동하는 함수
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
#search-box {
  display: flex;
  align-items: center;

  padding: 20px 10px;

  border-bottom: 1px solid #5c636a;

  max-width: 1130px;
}

.poster {
  width: 125px;
  margin-right: 20px;
}

.poster img {
  width: 100%;
}

.desc {
  width: 100%;
  padding: 10px;
}

h4 {
  cursor: pointer;
}
</style>
