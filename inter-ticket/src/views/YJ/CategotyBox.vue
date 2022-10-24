<template>
  <div id="category-box">
    <div class="poster">
      <img :src="item.thumbnail._text" />
    </div>
    <div class="desc">
      <p class="bold title" @click="goTo('detail-page')">
        {{ filteredTitle }}
      </p>
      <p class="bold">{{ item.startDate._text }} ~ {{ item.endDate._text }}</p>
      <p>{{ item.place._text }}</p>
    </div>
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
    goTo(routeName) {
      this.$router
        .push({
          name: routeName,
        })
        .catch(() => {});
    },
  },
  computed: {
    filteredTitle() {
      //이 부분은 새로운 엔티티 나올 때마다 추가하기
      return this.item.title._text
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    },
  },
};
</script>