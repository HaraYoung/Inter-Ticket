<template>
  <div class="home">
    <div id="wrapper">
      <router-view />
    </div>
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
