<template>
  <div class="home">
    <!-- Header -->
    <Header/>
    <div id="wrapper">
      <router-view />
    </div>
    <Footer/>
    <!-- Footer -->
  </div>
</template>

<style scoped>

</style>

<script>
// @ is an alias to /src
import Header from "../components/headerComponent.vue";
import Footer from "../components/footerComponent.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer
  }

};
</script>
