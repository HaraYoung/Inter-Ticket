<template>
  <div id="search-box">
    <!-- 전시 포스터 -->
    <div class="poster">
      <img :src="item.DP_MAIN_IMG" />
    </div>
    <!-- 전시 포스터 -->
    <!-- 전시 간략 정보 -->
    <div class="desc">
      <h4 class="bold" @click="goTo('/detail')">{{ item.DP_NAME }}</h4>
      <p class="bold">{{ item.DP_START }} ~ {{ item.DP_END }}</p>
      <p>{{ item.DP_PLACE }}</p>
    </div>
    <!-- 전시 간략 정보 -->
  </div>
</template>

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
  padding: 10px;
}

h4 {
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
    //클릭 시 해당 전시의 상세 페이지로 이동하는 함수
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
