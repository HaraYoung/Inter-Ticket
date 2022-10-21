<template>
  <div class="home">
    <router-view />
  </div>
</template>

<style scoped>
.home {
  margin: 0 auto;
  padding-top: 100px;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
};
</script>