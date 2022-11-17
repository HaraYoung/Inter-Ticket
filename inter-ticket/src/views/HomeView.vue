<!-- 파일 이름: HomeView.vue -->
<!-- 파일 설명: 기본 페이지 (헤더, 탑 버튼 제외) -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->

<template>
  <div class="home">
    <router-view :totalList="totalList" :slideList="slideList" />
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchList } from "@/API";

export default {
  name: "HomeView",
  data: function () {
    return {
      totalList: [],
      slideList: [],
    };
  },
  created() {
    fetchList().then((res) => {
      //DB 데이터 조회
      this.totalList = res.data;
      //메인 슬라이드에 보여줄 6개 필터링
      this.slideList = this.totalList.slice(0, 6);
    });
  },
};
</script>

<style scoped>
.home {
  margin: 0 auto;
  padding-top: 100px;

  background-color: white;
}
</style>
