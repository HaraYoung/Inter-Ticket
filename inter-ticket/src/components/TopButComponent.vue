<template>
  <div class="topBtnArea" v-show="scroll" @click="onClickTop()">
    <div>▲</div>
    <div style="font-size: 12px">TOP</div>
  </div>
</template>
<style scoped>
.topBtnArea {
  background-color: #6c757d;
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
    //TOP버튼 화면에서 on/off
    scrollEvent() {
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY; //스크롤바의 Y좌표
        const windowHeight = window.screen.availHeight; //웹브라우저의 창 높이

        //일정 높이에 도달했을 때 버튼이 나타남
        if (windowHeight >= 800 || scrollTop >= 300) {
          this.scroll = true;
        }
        //스크롤바의 Y좌표가 최상단이라면 버튼 숨김
        if (scrollTop == 0) {
          this.scroll = false;
        }
      });
    },
    //버튼 클릭시 버튼을 숨기고 스크롤 최상단으로 이동
    onClickTop() {
      this.scroll = false;
      window.scrollTo(0, 0);
    }
  },
  created() {
    //위에서 정의한 스크롤이벤트 실행
    this.scrollEvent();
  }
};
</script>