<template>
  <b-button-group class="mb-5">
    <b-button
      squared
      variant="outline-secondary"
      v-for="tab in tabMenu"
      @click="goTo(tab.routeName)"
      :key="tab.id"
      >{{ tab.name }}</b-button
    >
  </b-button-group>
</template>

<style scoped>
.btn-group {
  width: 100%;
}

button {
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: bold;
}
</style>

<script>
export default {
  props: ["tabMenu"],
  methods: {
    //클릭 시 탭에 설정된 라우터로 이동하는 함수
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
