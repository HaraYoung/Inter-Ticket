<template>
  <div class="headerArea">
    <div class="headerItem">
      <!-- 사이트 로고 -->
      <div class="logArea" @click="goTo('main-page')">
        <LogoComponent :fontSize="40" />
      </div>
      <!-- 사이트 로고 -->
      <div class="btnArea">
        <!-- 검색창 -->
        <div>
          <b-input-group>
            <b-form-input v-model="search"></b-form-input>
            <b-input-group-append @click.stop="searchTo('search-page')">
              <b-button>검색</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <!-- 검색창 -->
        <!-- 로그아웃 버튼 - 기능 없음 -->
        <v-btn color="primary" elevation="8" large plain>LogOut</v-btn>
        <!-- 로그아웃 버튼 - 기능 없음 -->
        <!-- 마이페이지 이동 버튼 -->
        <v-btn
          color="primary"
          elevation="8"
          large
          plainn
          @click="goTo('my-page')"
          >My Page</v-btn
        >
        <!-- 마이페이지 이동 버튼 -->
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
  z-index: 999;
}

.headerItem {
  max-width: 1130px;
  width: 100%;

  display: flex;
  max-width: 1130px;
  width: 100%;
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
  align-items: center;
  margin-right: 3em;
}
.btn {
  padding: 0.25em 0.5em;
  color: #fffbe9;
  margin: 0 1em;

  font-size: 12px;
}
.input-group .input-group-append .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  cursor: pointer;

  padding: 6px 12px;
  margin: 0;
  font-size: 16px;
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
  background-color: #1fb5a9;
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
  data() {
    return {
      search: "",
    };
  },
  methods: {
    //파라미터를 받아서 미리 설정된 name의 라우터로 이동하는 함수
    goTo(routeName) {
      this.$router
        .push({
          name: routeName,
        })
        .catch(() => {});
    },
    //검색 버튼 클릭 시 입력한 검색어를 query로 전달하고 검색 결과 페이지로 이동하는 함수
    searchTo(routeName) {
      this.$router
        .push({ name: routeName, query: { q: this.search } })
        .catch(() => {});
    },
  },
};
</script>
