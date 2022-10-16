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
</style>

<script>
export default {
  props: {
    tabMenu: Array,
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
