<template>
  <div id="my">
    <b-container id="wrapper">
      <h1 class="mb-5">마이 페이지</h1>
      <b-container id="content-box" class="p-5">
        <!-- 탭 메뉴 -->
        <TabMenu :tabMenu="tabMenu" />
        <!-- 탭 메뉴 -->
        <router-view class="router-content" />
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#my {
  background-color: #e3caa5;

  display: flex;
  justify-content: center;

  min-height: calc(100vh - 300px);
}

#wrapper {
  margin: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: #fffbe9;
}

.btn-group {
  width: 100%;
}

.router-content {
  width: 95%;
}
</style>

<script>
import TabMenu from "../../components/TabMenu.vue";

export default {
  data: function () {
    return {
      tabMenu: [
        {
          id: 0,
          name: "예매 내역",
          routeName: "my-ticket-list",
        },
        {
          id: 1,
          name: "관람평",
          routeName: "my-review-list",
        },
      ],
    };
  },
  components: {
    TabMenu,
  },
};
</script>
