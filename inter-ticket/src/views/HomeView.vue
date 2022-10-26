<template>
  <div class="home">
    <router-view
      :totalList="totalList"
      :slideList="slideList"
      :seoulList="seoulList"
    />
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
import { fetchList } from "@/API";

export default {
  name: "HomeView",
  data: function () {
    return {
      totalList: [],
      slideList: [],
      seoulList: [],
    };
  },
  created() {
    fetchList().then((res) => {
      //리스트 1000개 조회
      this.totalList = res.data.ListExhibitionOfSeoulMOAInfo.row;
      //메인 슬라이드에 보여줄 6개 필터링
      this.slideList = this.totalList.slice(0, 6);
      //한눈에 둘러보기에 보여줄 서울시립미술관 데이터 필터링
      this.seoulList = this.totalList.filter((item) =>
        item.DP_PLACE.includes("서울시립")
      );
    });
  },
};
</script>