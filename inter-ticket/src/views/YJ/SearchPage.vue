<template>
  <div id="category">
    <b-container id="wrapper">
      <h2 class="mb-5">검색 결과</h2>
      <b-container id="content-box" class="p-5">
        <!-- <tabMenu :tabMenu="tabMenu" /> -->
        <SearchBox v-for="item in exhibitionList" :key="item.id" :item="item" />
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
// import tabMenu from "../../components/TabMenu.vue";
import SearchBox from "./SearchBox.vue";

import tempData from "@/assets/tempData.json";
const exhibitionList = tempData.exhibitionList;

export default {
  data: function () {
    return {
      // tabMenu: [
      //   {
      //     id: 0,
      //     name: "연극",
      //   },
      //   {
      //     id: 1,
      //     name: "콘서트/뮤지컬",
      //   },
      //   {
      //     id: 2,
      //     name: "무용",
      //   },
      //   {
      //     id: 3,
      //     name: "미술",
      //   },
      //   {
      //     id: 4,
      //     name: "건축",
      //   },
      //   {
      //     id: 5,
      //     name: "축제문화공간",
      //   },
      //   {
      //     id: 6,
      //     name: "기타",
      //   },
      // ],
      exhibitionList,
    };
  },
  components: {
    // tabMenu,
    SearchBox,
  },
};
</script>
