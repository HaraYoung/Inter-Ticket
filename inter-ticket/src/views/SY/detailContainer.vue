<template>
  <div>
    <div class="detailArea">
        <div class="InfoArea">
            <div>전시정보</div>
            <div>탭매뉴</div>
            <div>탭정보</div>
        </div>
        <TicketBox/>
    </div>
  </div>
</template>
<style scoped>
.detailArea{
    display: flex;
    justify-content: space-around;
    background-color: #e3caa5;
}
</style>

<script>
import TicketBox from './detailTicket.vue';
export default {
  name: "detailPage",
  components:{
    TicketBox
  }

};
</script>