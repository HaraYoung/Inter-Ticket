<template>
  <div id="app" class="hankc">
    <Header />
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Hankc";
  font-style: normal;
  font-weight: 400;
  src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/hani/Hankc/Hankc.woff2")
      format("woff2"),
    url("//cdn.jsdelivr.net/korean-webfonts/1/corps/hani/Hankc/Hankc.woff")
      format("woff");
}

/* .hankc * {
  font-family: "Hankc", serif;
} */

body {
  margin: 0;
}

/* 스크롤바 전체 영역 */
/* ::-webkit-scrollbar {
  width: 10px;
} */
/* 스크롤이 움직이는 영역  */
/* ::-webkit-scrollbar-track {
  background-color: #f9f9f9;
} */
/*  스크롤  */
/* ::-webkit-scrollbar-thumb {
  background-color: ghostwhite;
  border-radius: 30px;
} */
</style>

<script>
// @ is an alias to /src
import Header from "./components/headerComponent.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>