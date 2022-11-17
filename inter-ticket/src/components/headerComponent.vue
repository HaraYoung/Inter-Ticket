<!-- 파일 이름: headerComponent.vue -->
<!-- 파일 설명: 사이트의 헤더 영역 -->
<!-- 작성자: 박세영, 황유진, 이메일: sypark@feelanet.com, yjhwang@feelanet.com -->

<template>
  <div class="headerArea">
    <div class="headerItem">
      <!-- 사이트 로고 -->
      <div class="logoArea" @click="goTo('main-page')">
        <LogoComponent />
      </div>
      <!-- 사이트 로고 -->
      <div class="btnArea">
        <!-- 검색창 -->
        <div class="searchArea mr-1">
          <b-input-group>
            <b-form-input
              v-model="search"
              @keyup.enter="search !== '' ? searchTo('search-page') : null"
            ></b-form-input>
            <b-input-group-append
              @click.stop="search !== '' ? searchTo('search-page') : null"
            >
              <b-button>검색</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <!-- 검색창 -->
        <!-- 로그아웃 버튼 - 기능 없음 -->
        <b-button class="mr-1">로그아웃</b-button>
        <!-- 로그아웃 버튼 - 기능 없음 -->
        <!-- 마이페이지 이동 버튼 -->
        <b-button @click="goTo('my-page')">마이페이지</b-button>
        <!-- 마이페이지 이동 버튼 -->
      </div>
    </div>
  </div>
</template>

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
      this.$router.push({
        name: routeName,
      });
    },
    //검색 버튼 클릭 시 입력한 검색어를 query로 전달하고 검색 결과 페이지로 이동하는 함수
    searchTo(routeName) {
      this.$router.push({ name: routeName, query: { q: this.search } });
    },
  },
  watch: {
    //라우터가 변경되면(페이지를 이동하면) 검색창을 리셋시킴
    $route: function () {
      this.search = "";
    },
  },
};
</script>

<style scoped>
.headerArea {
  background-color: ghostwhite;
  width: 100%;
  height: 100px;
  min-width: 966px;

  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 999;
  border-bottom: 1px solid gray;
}

.headerItem {
  max-width: 1200px;
  width: 100%;

  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.logoArea {
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
  padding: 0.5em 1em;
  background-color: #25c4c2;

  font-size: 16px;
}
.mr-1 {
  margin-right: 1em;
}
.input-group .input-group-append .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  cursor: pointer;

  padding: 0.5em 1em;
  margin: 0;
  font-size: 16px;
}
</style>