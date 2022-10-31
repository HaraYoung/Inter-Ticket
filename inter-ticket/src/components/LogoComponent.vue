<!-- 파일 이름: LogoComponent.vue -->
<!-- 파일 설명: 헤더의 로고 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <b class="font">INTERTICKET</b>
</template>

<script>
export default {
  props: {
    fontSize: Number,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "CHONBUKL";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/CHONBUKL.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.font {
  font-family: "CHONBUKL", sans-serif;
  color: #25c4c2;
  font-size: 40px;
}
</style>
