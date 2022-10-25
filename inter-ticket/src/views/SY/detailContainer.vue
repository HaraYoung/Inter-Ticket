<template>
  <div class="detailArea">
    <div class="detailContainer">
      <div class="InfoArea">
          <!--상단의 간단 전시 정보 영역-->
        <div class="infoContent">
          <div class="infos">
            <h2>{{ exhibitionList[0].title }}</h2>
            <div class="infoText">
              <div class="infoFirst">
                <span class="borderText">
                  <b>기간</b>
                </span>
                <span class="borderText">
                  {{ exhibitionList[0].start_date }} ~
                  {{ exhibitionList[0].end_date }}
                </span>
              </div>
              <div>
                <span class="borderText">
                  <b>장소</b>
                </span>
                <span>{{ exhibitionList[0].location }}</span>
              </div>
              <div class="price">
                <span class="borderText">
                  <b>가격</b>
                </span>
                <span>
                  <div>
                    <span>일반 : {{ exhibitionList[0].price.일반 }} /</span>
                    <span>청소년 : {{ exhibitionList[0].price.청소년 }} /</span>
                  </div>
                  <div>
                    <span>어린이 : {{ exhibitionList[0].price.어린이 }} /</span>
                    <span>특별권 : {{ exhibitionList[0].price.특별권 }}</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div class="infoImg">
            <img :src="exhibitionList[0].posterUrl" alt="poster" width="70%" />
          </div>
        </div>
        <!--텝매뉴-->
        <div class="tap">
          <TabMenu :tabMenu="tabMenu" />
        </div>
        <!--클릭한 탭 메뉴에 따라 달라지는 내용 영역-->
        <div class="tapContent">
          <router-view />
        </div>
      </div>
      <!--우측 티켓 박스 영역-->
      <div class="ticket">
        <DetailTicket />
      </div>
    </div>
  </div>
</template>
<style scoped>
.detailArea {
  background-color: gray;
  display: flex;
  justify-content: center;
}
.detailArea .detailContainer {
  display: flex;
  justify-content: center;
  min-width: 1530px;
}
.InfoArea {
  padding-bottom: 4em;
  background-color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 2em;
  margin-left: 7em;
}
.ticket {
  width: 17%;
  min-width: 28%;
  margin-top: 2em;
}
.infoContent {
  display: flex;
}
.infos {
  width: 60%;
  margin: 2.5em;
  margin-right: 0;
}
.infos h2 {
  font-weight: bolder;
  font-size: 1.5em;
}
.infos div {
  font-size: 1em;
}
.infos div b {
  margin-right: 1em;
  color: black;
  background-color: gray;
  padding: 0.5em;
}
.borderText {
  margin-bottom: 1em;
}
.infoImg {
  width: 30%;
  margin-top: 2.5em;
  margin-left: 0.8em;
}
.infoText {
  padding-top: 0.2em;
}
.infoImg img {
  width: 100%;
}
.infoText > div {
  padding: 1em 0;
}
.price {
  display: flex;
  align-items: center;
}
.infoFirst {
  margin-top: 2em;
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
    TabMenu,
  },
  data: function () {
    return {
      exhibitionList,
      tabMenu: [
        {
          id: 0,
          name: "전시 소개",
          routeName: "info",
        },
        {
          id: 1,
          name: "전시 장소",
          routeName: "place",
        },
        {
          id: 2,
          name: "관람평",
          routeName: "review",
        },
        {
          id: 3,
          name: "예매 안내",
          routeName: "help",
        },
      ],
    };
  },
  created() {},
};
</script>