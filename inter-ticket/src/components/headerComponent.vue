<template>
  <div class="headerArea">
    <div class="headerItem">
      <div class="logArea" @click="goTo('main-page')">
        <LogoComponent :fontSize="40" />
      </div>
      <div class="btnArea">
        <div class="searchArea">
          <input type="text" />
          <span>검색</span>
        </div>
        <b-button>LogOut</b-button>
        <b-button @click="goTo('my-page')">My Page</b-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerArea {
  background-color: white;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;

  position: fixed;
}

.headerItem {
  display: flex;
  width: 1130px;
  justify-content: space-between;
  align-items: center;
}

.logArea {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  padding-left: 5em;
}
.btnArea {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
}
.btn {
  padding: 0.25em 0.5em;
  color: #fffbe9;
  margin: 0 1em;

  font-size: 12px;
}
.searchArea {
  width: 50%;
  position: relative;
  margin-right: 1em;
}

.searchArea input {
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 1em;
}
.searchArea span {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em;
  background-color: #6c757d;
  color: #fffbe9;
  cursor: pointer;
  border-radius: 5px;
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
