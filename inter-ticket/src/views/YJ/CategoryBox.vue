<template>
  <div class="category-box" @click="goTo('/detail')">
    <!-- 전시 포스터 -->
    <div class="poster">
      <img :src="item.DP_MAIN_IMG" />
    </div>
    <!-- 전시 포스터 -->
    <!-- 전시 간략 정보 -->
    <div class="desc">
      <p class="bold title text-truncate">
        {{ item.DP_NAME }}
      </p>
      <p class="bold">{{ item.DP_START }} ~ {{ item.DP_END }}</p>
      <p>{{ item.DP_PLACE }}</p>
    </div>
    <!-- 전시 간략 정보 -->
  </div>
</template>

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