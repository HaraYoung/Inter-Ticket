<!-- 파일 이름: App.vue -->
<!-- 파일 설명: Interticket 애플리케이션의 최상위 컴포넌트 -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->

<template>
  <div id="app" class="font postion">
    <Header />
    <TopBtn />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./components/headerComponent.vue";
import TopBtn from "./components/TopButComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    TopBtn,
  },
};
</script>

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
.postion {
  position: relative;
}
</style>
