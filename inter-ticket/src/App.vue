<template>
  <div id="app" class="font">
    <Header />
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.font * {
  font-family: "GmarketSansMedium", serif;
}

body {
  margin: 0;
}

/* 스크롤바 전체 영역 */
::-webkit-scrollbar {
  width: 12px;
}
/* 스크롤이 움직이는 영역  */
::-webkit-scrollbar-track {
  background-color: #f9f9f9;
}
/*  스크롤  */
::-webkit-scrollbar-thumb {
  background-color: #b7cae2;
  border-radius: 30px;
}
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