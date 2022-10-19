<template>
  <div id="search-box">
    <div class="poster">
      <img :src="item.posterUrl" />
    </div>
    <div class="desc">
      <h4 class="bold" @click="goTo('detail-page')">{{ item.title }}</h4>
      <p class="bold">{{ item.start_date }} ~ {{ item.end_date }}</p>
      <p>{{ item.location }}</p>
    </div>
  </div>
</template>

<style scoped>
#search-box {
  display: flex;
  align-items: center;

  padding: 20px 10px;

  border-bottom: 1px solid #5c636a;
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
