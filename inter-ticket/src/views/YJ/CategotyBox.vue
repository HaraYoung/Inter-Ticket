<template>
  <div id="category-box">
    <div class="poster">
      <img :src="item.thumbnail._text" />
    </div>
    <div class="desc">
      <p class="bold title" @click="goTo('detail-page')">
        {{ item.title._text }}
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
  width: 100%;
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
};
</script>