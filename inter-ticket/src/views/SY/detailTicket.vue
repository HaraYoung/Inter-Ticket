<template>
  <vdiv class="ticketArea">
    <h4>관람일</h4>
    <CalenderComponent/>
    <!--예매 하기 버튼 클릭시 나타나는 모달-->
    <span>
      <!--예매 확인 모달-->
      <b-modal
        id="modal-multi-1"
        size="lg"
        title="First Modal"
        ok-only
        no-stacking
      >
        <div>{{ title }}</div>
        <div>예매 날짜 : {{ this.picker }}</div>
        <div>예매 매수 : {{ this.counter }}</div>
        <div>예매하시겠습니까?</div>
        <template #modal-footer="{ ok, cancel }">
          <b-button
            size="sm"
            variant="success"
            @click="ok()"
            v-b-modal.modal-multi-2
            >확인</b-button
          >
          <b-button size="sm" variant="danger" @click="cancel()">취소</b-button>
        </template>
      </b-modal>
      <!--두번째 나타날 모달[예매 완료시]-->
      <b-modal id="modal-multi-2" title="Second Modal" ok-only>
        <div>예매되었습니다!</div>
        <template #modal-footer="{ cancel }">
          <b-button size="sm" variant="danger" @click="cancel(), onChangeUrl()"
            >확인</b-button
          >
        </template>
      </b-modal>
    </span>
  </vdiv>
</template>

<script>
import CalenderComponent from '../../components/CalenderComponent.vue';
export default {
  components:{
    CalenderComponent
  },
  props: ["title"]
};
</script>

<style scoped>
.ticketArea {
  background-color: black;
  padding: 1em 2em;
  max-height: 90vh;
  max-width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ticketArea h4 {
  text-align: center;
  color: #53513d;
  background-color: white;
  padding: 0.5em;
  width: 100%;
  font-weight: bold;
  font-size: 1.1em;
}
.ticketBtnArea {
  margin-top: 1em;
}
.ticketBtn {
  padding: 0.5em 6em;
  color: #fffbe9;
  margin: 0 1em;
  font-size: 0.9em;
}
.counter {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.5em;
}
.counter p {
  font-size: 1em;
  padding-top: 0.5em;
}
.calender {
  margin-top: 1em;
}
</style>
