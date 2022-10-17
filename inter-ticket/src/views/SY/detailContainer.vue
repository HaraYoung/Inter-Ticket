<template>
  <div class="detailArea">
    <div>
      <div class="InfoArea">
        <div class="infoContent">
          <div class="info">
            <h2>{{ exhibitionList[0].title }}</h2>
            <div class="infoText">
              <div class="infoFirst">
                <b>기간</b>
                <span>
                  {{ exhibitionList[0].start_date }} ~
                  {{ exhibitionList[0].end_date }}
                </span>
              </div>
              <div>
                <b>장소</b>
                <span>{{ exhibitionList[0].location }}</span>
              </div>
              <div>
                <b>가격</b>
                <span>일반 : {{ exhibitionList[0].price.일반 }} /</span>
                <span>청소년 : {{ exhibitionList[0].price.청소년 }} /</span>
                <span>어린이 : {{ exhibitionList[0].price.어린이 }} /</span>
                <span>특별권 : {{ exhibitionList[0].price.특별권 }}</span>
              </div>
            </div>
          </div>
          <div class="infoImg">
            <img :src="exhibitionList[0].posterUrl" alt="poster" width="300px" />
          </div>
        </div>
        <div class="tap">
          <TabMenu :tabMenu="tabMenu" />
        </div>
        <div class="tapContent">
          <router-view />
        </div>
      </div>
      <div class="ticket">
        <DetailTicket />
      </div>
    </div>
  </div>
</template>
<style scoped>
.detailArea {
  background-color: #f0e7db;
}
.detailArea > div {
  display: flex;
  justify-content: center
}
.InfoArea {
  padding-bottom: 4em;
  background-color: white;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 2em;
  min-width: 1055px;
}
.ticket {
  width: 20%;
  background-color: white;
  margin: 2em 2em 2em 0;
  height: 50vh;
}
.infoContent {
  display: flex;
  justify-content: space-around;
}
.info {
  width: 70%;
  margin: 2.5em;
}
.info h2 {
  font-weight: bolder;
}
.info div {
  font-size: 18px;
  margin: 1em 0;
}
.infoFirst {
  padding-top: 2em;
}
.info div b {
  margin-right: 1em;
  color: #53513d;
  background-color: #f0e7db;
  padding: 0.5em;
}
.infoImg {
  width: 30%;
  margin-top: 2em;
}
.infoText {
  padding-top: 1em;
}
.tap {
  margin: 3em;
  width: 90%;
}
</style>

<script>
import DetailTicket from "./detailTicket.vue";
import TabMenu from "../../components/TabMenu.vue";

import tempData from "@/assets/tempData.json";

const exhibitionList = tempData.exhibitionList;

export default {
  name: "detailPage",
  components: {
    DetailTicket,
    TabMenu
  },
  data: function() {
    return {
      exhibitionList,
      tabMenu: [
        {
          id: 0,
          name: "전시 소개",
          routeName: "info"
        },
        {
          id: 1,
          name: "전시 장소",
          routeName: "place"
        },
        {
          id: 2,
          name: "관람평",
          routeName: "review"
        },
        {
          id: 3,
          name: "예매 안내",
          routeName: "help"
        }
      ]
    };
  }
};
</script>