<template>
  <div id="category">
    <b-container id="wrapper">
      <h2 class="mb-5">검색 결과</h2>
      <b-container id="content-box" class="p-5">
        <SearchBox v-for="item in searchList" :key="item.DP_SEQ" :item="item" />
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#category {
  max-width: 1130px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 100px);
}

#wrapper {
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: white;
  width: 95%;
}

h2 {
  font-weight: bold;
}
</style>

<script>
import SearchBox from "./SearchBox.vue";

export default {
  data: function () {
    return {
      searchList: [],
    };
  },
  components: {
    SearchBox,
  },
  props: ["totalList"],
  //totalList props로 받아서 필터링하기
  //검색 버튼 누를 때 경로로 검색어를 쿼리값으로 넘기고, 이 페이지에서는 해당 검색어를 params로 받아서 데이터 필터링하자
  //search 페이지 내에서 검색어 변경할 때 query 값은 바뀌는데 검색 결과는 안 바뀜! 보완 필요
  //created가 아니라 다른 훅을 써야 하나?
  created() {
    this.searchList = this.totalList.filter((item) =>
      item.DP_NAME.includes(this.$route.query.q)
    );
  },
};
</script>
