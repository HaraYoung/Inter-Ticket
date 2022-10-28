<template>
  <div id="category" ref="category">
    <b-container id="wrapper">
      <h2 class="mt-5">검색 결과</h2>
      <b-container v-if="searchList.length > 0" id="content-box" class="p-5">
        <SearchBox
          v-for="item in searchList.slice(0, limit)"
          :key="item.DP_SEQ"
          :item="item"
        />
      </b-container>
      <b-container v-else id="content-box" class="p-5">
        <h5 class="text-center">해당하는 전시회를 찾을 수 없습니다.</h5>
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

  background-color: #dce4ed;
}

#content-box {
  width: 95%;
}

h2 {
  font-weight: bold;
}
</style>

<script>
import SearchBox from "./SearchBox.vue";

export default {
  data() {
    return {
      limit: 12,
      scrollY: 0,
      innerHeight: 0,
      scrollHeight: 0,
    };
  },
  components: {
    SearchBox,
  },
  props: ["totalList"],
  //totalList props로 받아서 필터링
  //검색 버튼 누를 때 경로로 검색어를 쿼리값으로 넘기고, 이 페이지에서는 해당 검색어를 params로 받아서 데이터 필터링
  computed: {
    searchList() {
      return this.totalList.filter((item) =>
        item.DP_NAME.includes(this.$route.query.q)
      );
    },
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY;
      this.innerHeight = window.innerHeight;
      if (scrollY + innerHeight > this.$refs.category.scrollHeight) {
        this.limit += 12;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.scrollTo(0,0);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
