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
      scroll: false,
      //   scrollTop: window.scrollY,
      //   windowHeight: window.screen.availHeight,
      //   documentHeight: document.body.scrollHeight
    };
  },
  methods: {
    scrollEvent() {
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        const windowHeight = window.screen.availHeight; //웹브라우저의 창 높이
        const documentHeight = document.body.scrollHeight; //Html 문서의 높이

        console.log(
          "스크롤이 발생하고 있음: scrollTop=" +
            scrollTop +
            ", documentHeight=" +
            documentHeight +
            ",windowHeight=" +
            windowHeight
        );

        //일정 높이에 도달했을 때 버튼이 나타남
        if (
          //   this.scrollTop == 400 ||
          //   this.documentHeight == 2708 ||
          windowHeight >= 800 ||
          scrollTop >= 300
        ) {
          this.scroll = true;
        }
        if (scrollTop == 0) {
          this.scroll = false;
        }
      });
    },
    onClickTop() {
      //let scrollTop = window.scrollY; //스크롤바의 Y좌표
      this.scroll = false;
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.scrollEvent();
  },
};
</script>