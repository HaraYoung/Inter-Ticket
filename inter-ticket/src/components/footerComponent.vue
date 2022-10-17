<template>
  <div class="footerArea">
    <div class="footerItem">
      <div class="logArea">
        <LogoComponent :fontSize="30" />
      </div>
      <div class="company">
        <p>서울특별시 강남구 논현동</p>
        <p>copyrightⓒ2020 Seoul Arts Center. All rights Reserved.</p>
      </div>
      <div class="business">
        <b>대표자</b>
        <div>이OO</div>
      </div>
      <div class="business">
        <b>사업자 등록번호</b>
        <div>000-00000-0000</div>
      </div>
      <div class="business">
        <b>콜센터</b>
        <div>1544-8822</div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.footerArea {
  background-color: white;
  width: 100%;
  height: 100px;
  min-width: 1200px;

  display: flex;
}
.footerItem {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.btn {
  padding: 0.5em 1em;
  border: 1px solid #fffbe9;
  color: #fffbe9;
  margin: 0 1em;
}
.business {
  width: 10%;
}
b {
  display: inline-block;
  margin-bottom: 1em;
}
</style>

<script>
import LogoComponent from "@/components/LogoComponent.vue";

export default {
  components: {
    LogoComponent,
  },
};
</script>

  