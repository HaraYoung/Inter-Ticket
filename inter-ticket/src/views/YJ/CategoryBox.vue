<template>
  <div id="category-box">
    <!-- 전시 포스터 -->
    <div class="poster">
      <img :src="item.DP_MAIN_IMG" />
    </div>
    <!-- 전시 포스터 -->
    <!-- 전시 간략 정보 -->
    <div class="desc">
      <p class="bold title" @click="goTo('/detail')">
        {{ item.DP_NAME }}
      </p>
      <p class="bold">{{ item.DP_START }} ~ {{ item.DP_END }}</p>
      <p>{{ item.DP_PLACE }}</p>
    </div>
    <!-- 전시 간략 정보 -->
  </div>
</template>

<style scoped>
#category-box {
  padding: 20px 10px;

  border-bottom: 1px solid #5c636a;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.poster img {
  width: 203.67px;
  height: 287px;
}

.desc {
  padding: 10px;
}

h4 {
  cursor: pointer;
}

.bold {
  font-weight: bold;
}

.title {
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {
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