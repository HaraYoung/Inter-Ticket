<template>
  <div class="topBtnArea" v-show="scroll" @click="onClickTop()">
    <div>▲</div>
    <div style="font-size:12px">TOP</div>
  </div>
</template>
<style scoped>
.topBtnArea {
  background-color: #6C757D;
  position: fixed;
  z-index: 99999;
  bottom: 8%;
  right: 3%;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
        //scroll 이벤트에 따라 TOP버튼의 
      scroll: false
    };
  },
  methods: {
    scrollEvent() {
      window.addEventListener("scroll", () => {
        const scrollTop= window.scrollY; //스크롤바의 Y좌표

        const windowHeight = window.screen.availHeight; //웹브라우저의 창 높이

        //일정 높이에 도달했을 때 버튼이 나타남
        if (
          windowHeight == 800
        ) {
          this.scroll = true;
        }
        //스크롤바가 최상단이라면 top버튼 숨김
        if( scrollTop == 0 ){
          this.scroll = false;
        }
      });
    },
    onClickTop() {
      this.scroll = false;
      window.scrollTo(0,0);
    }
  },
  created() {
    this.scrollEvent();
  }
};
</script>