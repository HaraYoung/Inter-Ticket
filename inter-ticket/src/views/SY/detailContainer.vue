<template>
  <div>
    <div class="detailArea">
      <div class="InfoArea">
        <div class="infoContent">
          <div class="info">
            <h2>{{exhibitionList[0].title}}</h2>
            <div class="infoFirst">
              <b>기간</b>
              <span>{{exhibitionList[0].start_date}} ~ {{exhibitionList[0].end_date}}</span>
            </div>
            <div>
              <b>장소</b>
              <span>{{exhibitionList[0].location}}</span>
            </div>
            <div>
              <b>가격</b>
              <span>일반 : {{exhibitionList[0].price.일반}} /</span>
              <span>청소년 : {{exhibitionList[0].price.청소년}} /</span>
              <span>어린이 : {{exhibitionList[0].price.어린이}} /</span>
              <span>특별권 : {{exhibitionList[0].price.특별권}}</span>
            </div>
          </div>
          <div>
            <img :src="exhibitionList[0].posterUrl" alt="poster" width="300px" />
          </div>
        </div>
        <div>탭매뉴</div>
        <div>탭정보</div>
      </div>
      <DetailTicket />
    </div>
  </div>
</template>
<style scoped>
.detailArea {
  display: flex;
  justify-content: space-around;
  background-color: #e3caa5;
}
.InfoArea {
  width: 60%;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  background-color: #ad8b73;
}
.infoContent {
  display: flex;
  justify-content: space-around;
}
.info {
  width: 70%;
  margin: 2em;
}
.info div {
  font-size: 18px;
  margin: 1em 0;
}
.infoFirst{
  padding-top: 2em;
}
.info div b{
    padding-right: 1em;
    
}
</style>

<script>
import DetailTicket from "./detailTicket.vue";
import tempData from "@/assets/tempData.json";

const exhibitionList = tempData.exhibitionList;

export default {
  name: "detailPage",
  components: {
    DetailTicket
  },
  data: function() {
    return {
      exhibitionList
    };
  }
};
</script>