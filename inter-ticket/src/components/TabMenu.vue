<!-- 파일 이름: TabMenu.vue -->
<!-- 파일 설명: 메인 페이지와 상세 페이지의 탭 메뉴 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <b-button-group class="mb-5">
    <b-button
      squared
      v-for="tab in tabMenu"
      @click="[goTo(tab.routeName), tabChanger(tab.id)]"
      :key="tab.id"
      :class="[tab.id === tabId ? 'active' : null]"
      >{{ tab.name }}</b-button
    >
  </b-button-group>
</template>

<script>
export default {
  props: ["tabMenu"],
  data() {
    return {
      tabId: 0,
    };
  },
  methods: {
    tabChanger(id) {
      this.tabId = id;
    },
    //클릭 시 탭에 설정된 라우터로 이동하는 함수
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

<style scoped>
.btn-group {
  width: 100%;
}

button {
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: bold;

  background-color: #25c4c2;
  border: none;
}
</style>