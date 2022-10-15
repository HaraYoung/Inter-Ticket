<template>
  <div id="my">
    <b-container id="wrapper">
      <h1 class="mb-5">마이 페이지</h1>
      <b-container id="content-box" class="p-5">
        <!-- 탭 메뉴 -->
        <b-button-group class="mb-5">
          <b-button
            squared
            variant="outline-secondary"
            v-for="tab in tabMenu"
            @click="goTo(tab.routeName)"
            :key="tab.id"
            >{{ tab.name }}</b-button
          >
        </b-button-group>
        <!-- 탭 메뉴 -->
        <router-view />
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
#my {
  background-color: #e3caa5;

  display: flex;
  justify-content: center;
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

#tab-menu {
  display: flex;
  justify-content: center;
}

.btn-group {
  width: 100%;
}

.router-content {
  width: 95%;
}
</style>

<script>
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
  methods: {
    goTo(routeName) {
      this.$router
        .push({
          name: routeName,
        })
        .catch(() => {});
    },
  },
};
</script>
