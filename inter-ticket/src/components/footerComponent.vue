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
  background-color: #6c757d;
  width: 100%;
  height: 150px;
  min-width: 1200px;
}
.footerItem {
  display: flex;
  padding-top: 4em;
  width: 100%;
  justify-content: space-around;
}
.btn {
  padding: 0.5em 1em;
  border: 1px solid #fffbe9;
  color: #fffbe9;
  margin: 0 1em;
}
.company {
  color: #fffbe9;
}
.business {
  color: #fffbe9;
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

  