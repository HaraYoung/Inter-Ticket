<template>
  <div class="headerArea">
    <div class="headerItem">
      <div class="logArea" @click="goTo('main-page')">
        <LogoComponent :fontSize="40" />
      </div>
      <div class="btnArea">
        <b-button class="btn">검색</b-button>
        <b-button class="btn">LogOut</b-button>
        <b-button class="btn" href="mypage">My Page</b-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerArea {
  background-color: #6c757d;
  width: 100%;
  min-width: 1200px;
  height: 150px;
}
.headerItem {
  display: flex;
  padding-top: 4em;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.logArea {
  width: 70%;
  display: flex;
  justify-content: center;

  cursor: pointer;
}
.btnArea {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}
.btn {
  padding: 0.5em 1em;
  border: 1px solid #fffbe9;
  color: #fffbe9;
  margin: 0 1em;
}
</style>

<script>
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  components: {
    LogoComponent,
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
