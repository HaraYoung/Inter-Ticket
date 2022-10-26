<template>
  <div>
    <span>
      <b-modal
        id="modal-multi-1"
        size="lg"
        title="First Modal"
        ok-only
        no-stacking
      >
        <v-app class="ticketArea">
          <h4>{{ item.ticketName }}</h4>
          <div class="calender">
            <v-row justify="center">
              <v-date-picker
                v-model="picker"
                color="black lighten-1"
                @click="dateChanger"
              ></v-date-picker>
            </v-row>
          </div>
          <div class="counter">
            <p>예매 매수</p>
            <div>
              <b-button @click="onClickMinus()">-</b-button>
              <b-button variant="outline-dark">{{ counter }}</b-button>
              <b-button @click="onclickPlus()">+</b-button>
            </div>
          </div>
        </v-app>
        <template #modal-footer="{ ok, cancel }">
          <b-button
            size="sm"
            variant="success"
            @click="ok()"
            v-b-modal.modal-multi-2
            >변경하기</b-button
          >
          <b-button size="sm" variant="danger" @click="cancel()">취소</b-button>
        </template>
      </b-modal>

      <b-modal id="modal-multi-2" title="Second Modal" ok-only>
        <div>예매 날짜 : {{ this.picker }}</div>
        <div>예매 매수 : {{ this.counter }}</div>
        <div>예매 내용을 변경하시겠습니까?</div>
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

      <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
        <div>변경되었습니다!</div>
        <template #modal-footer="{ ok }">
          <b-button
            size="sm"
            variant="danger"
            @click="ok()"
            v-b-modal.modal-multi-3
            >확인</b-button
          >
        </template>
      </b-modal>
    </span>


    <span>
      <b-modal
        id="modal-multi-1"
        size="lg"
        title="First Modal"
        ok-only
        no-stacking
      >
        <div>예매 날짜 : {{ this.picker }}</div>
        <div>예매 매수 : {{ this.counter }}</div>
        <div>예매 내용을 변경하시겠습니까?</div>
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
      <b-modal id="modal-multi-2" title="Second Modal">
        <p class="my-2">Second Modal</p>
        <template #modal-footer="{ ok }">
          <b-button v-b-modal.modal-multi-3 size="sm" @click="ok()"
            >확인</b-button
          >
        </template>
      </b-modal>
      <b-modal id="modal-multi-3" size="sm" title="Third Modal" ok-only>
        <p class="my-1">Third Modal</p>
      </b-modal>
    </span>
  </div>
</template>

<script>
import dataJson from "@/assets/realData.json";
export default {
  data() {
    return {
      item: dataJson.DATA,
    };
  },
};
// import Vue from 'vue'

// export default Vue.extend({
//     data(){
//         itemData: dataJson.DATA
//     }
// })
//test
</script>
