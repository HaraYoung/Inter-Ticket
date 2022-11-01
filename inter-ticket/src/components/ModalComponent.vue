<template>
  <!--버튼 클릭시 나타나는 모달-->
  <div class="modalArea">
    <div class="wrapper" v-if="openModal_0">
      <slot name="modal_0"></slot>
    </div>

    <!--첫번째 모달-->
    <div class="wrapper" v-if="openModal_1">
      <slot name="modal_1"></slot>
    </div>

    <!--두번째 모달-->
    <div class="wrapper" v-if="openModal_2">
      <slot name="modal_2"></slot>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: ["openModal_2", "openModal_1", "openModal_0", "cancel", "content"]
};
</script>
<style scoped>
.wrapper {
  box-sizing: border-box;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);

  outline: 0;
}
.modalArea {
  position: absolute;
  width: 50%;
  left: 30%;
  top: 8%;
}



</style>