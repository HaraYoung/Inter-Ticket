<template>
  <div id="category">
    <b-container id="wrapper">
      <h2 class="mb-5">한 눈에 둘러보기</h2>
      <b-container id="content-box" class="p-5">
        <tabMenu :tabMenu="tabMenu" />
        <div class="grid">
          <CategoryBox
            v-for="item in exhibitionList"
            :key="item.id"
            :item="item"
          />
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#category {
  background-color: #f0e7db;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 100px);
}

#wrapper {
  margin: 100px 0;

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

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import tabMenu from "../../components/TabMenu.vue";
import CategoryBox from "./CategotyBox.vue";

import tempData from "@/assets/tempData.json";
const exhibitionList = tempData.exhibitionList;

export default {
  data: function () {
    return {
      tabMenu: [
        {
          id: 0,
          name: "연극",
        },
        {
          id: 1,
          name: "뮤지컬",
        },
        {
          id: 2,
          name: "클래식/오페라",
        },
        {
          id: 3,
          name: "무용",
        },
        {
          id: 4,
          name: "국악/복합",
        },
        {
          id: 5,
          name: "아동",
        },
        {
          id: 6,
          name: "오픈런",
        },
      ],
      exhibitionList,
    };
  },
  components: {
    tabMenu,
    CategoryBox,
  },
};
</script>
