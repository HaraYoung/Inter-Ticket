<template>
  <div class="home">
    <!-- Header -->
    <div id="wrapper">
      <router-view />
    </div>
    <!-- Footer -->
  </div>
</template>

<style scoped>
#wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
