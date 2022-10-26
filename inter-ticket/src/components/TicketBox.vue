<template>
  <b-row border-variant="primary" class="ticket-border ticket-flex py-3">
    <b-col>{{ item.choseDate }}</b-col>
    <b-col>{{ item.reservationNum }}</b-col>
    <b-col cols="3">{{ item.ticketName }}</b-col>
    <b-col cols="1">{{ item.ticketCount }}</b-col>
    <b-col>{{ item.date }}</b-col>
    <b-col>
      <span v-if="item.status.isCanceled">예매 취소</span>
      <div v-else class="btn-flex">
        <b-button size="sm" @click="modalEdit = !modalEdit">변경</b-button>
        <b-button size="sm" @click="modalCancel = !modalCancel">취소</b-button>
      </div>
    </b-col>
    <!-- 예매 변경 모달 -->
    <div>
      <b-modal v-model="modalEdit" :hide-header="true">
        <!-- <detailTicket /> -->
      </b-modal>
    </div>
    <!-- 예매 변경 모달 -->
    <!-- 예매 취소 모달 -->
    <div>
      <b-modal v-model="modalCancel" :hide-header="true"
        >예매를 취소하시겠습니까?</b-modal
      >
    </div>
    <!-- 예매 취소 모달 -->
  </b-row>
</template>

<style scoped>
.ticket-flex {
  display: flex;
  align-items: center;
}

.ticket-border {
  border-bottom: 1px solid #6c757d;
}

.btn-flex {
  display: flex;
  justify-content: space-around;
}

span {
  font-weight: bold;
  color: red;
}
</style>

<script>
// import detailTicket from "../views/SY/detailTicket.vue";
export default {
  components: {
    // detailTicket,
  },
  data: function () {
    return {
      modalEdit: false,
      modalCancel: false,
      dialog: false,
    };
  },
  props: {
    item: Object,
  },
};
</script>