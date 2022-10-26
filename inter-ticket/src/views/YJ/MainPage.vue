<template>
  <div id="main">
    <!-- 메인 전시 슬라이드 -->
    <v-container id="main-slide">
      <swiper class="swiper" :options="swiperOption">
        <SlideBox v-for="item in slideList" :key="item.DP_SEQ" :item="item" />
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-container>
    <!-- 메인 전시 슬라이드 -->
    <!-- 전시 목록 영역 -->
    <v-container id="wrapper">
      <h2 class="mb-5">한 눈에 둘러보기</h2>
      <v-container id="content-box" class="p-5">
        <!-- Tab Menu 컴포넌트 재사용할 수 있을까? -->
        <b-button-group class="mb-5">
          <b-button
            squared
            variant="outline-secondary"
            v-for="tab in tabMenu"
            @click="listFilter(tab.id)"
            :key="tab.id"
            >{{ tab.name }}</b-button
          >
        </b-button-group>
        <div class="mt-3">
          <div class="grid">
            <CategoryBox
              v-for="item in filteredList.slice(0, 12)"
              :key="item.DP_SEQ"
              :item="item"
            />
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- 전시 목록 영역 -->
  </div>
</template>

<style scoped>
#main {
  max-width: 1130px;
  width: 100%;
  margin: 80px auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 100px);
}

#main-slide {
  background: linear-gradient(#e6d5ae 70%, #bab7a4 30%);
}

#wrapper {
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: white;
  width: 95%;
}

h2 {
  font-weight: bold;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.swiper-container {
  width: 90%;
}

.btn-group {
  width: 100%;
}

button {
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: bold;
}
</style>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper } from 'vue-awesome-swiper'
import SlideBox from "../../components/SlideBox.vue";
import CategoryBox from "../YJ/CategoryBox.vue";

export default {
  name: "MainPage",
  components: {
    swiper,
    SlideBox,
    CategoryBox,
  },
  props: ["totalList", "slideList", "seoulList"],
  data: function () {
    return {
      //전시 슬라이드 관련 옵션
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //   delay: 3000,
        // },
      },
      //탭 메뉴 내용
      tabMenu: [
        {
          id: 0,
          name: "서울시립미술관",
        },
        {
          id: 1,
          name: "난지미술창작스튜디오",
        },
        {
          id: 2,
          name: "SeMA 벙커 및 창고",
        },
        {
          id: 3,
          name: "기타",
        },
      ],
      //탭에 따라 필터링된 전시 목록 - 디폴트값
      //보완 필요
      filteredList: this.seoulList,
    };
  },
  methods: {
    //이거 이렇게 하는 게 아닌 거 같은데 ㅋㅋㅋ
    listFilter(id) {
      if (id === 0) {
        this.filteredList = this.totalList.filter((item) =>
          item.DP_PLACE.includes("서울시립")
        );
      } else if (id === 1) {
        this.filteredList = this.totalList.filter((item) =>
          item.DP_PLACE.includes("난지")
        );
      } else if (id === 2) {
        this.filteredList = this.totalList.filter((item) =>
          item.DP_PLACE.includes("SeMA")
        );
      } else {
        //여기도 아닌 거 같애 ㅋㅋㅋㅋ
        this.filteredList = this.totalList.filter(
          (item) =>
            !item.DP_PLACE.includes("서울시립") &&
            !item.DP_PLACE.includes("난지") &&
            !item.DP_PLACE.includes("SeMA")
        );
      }
    },
  },
  computed: {
    rows() {
      return this.filteredList.length;
    },
  },
  created() {
    this.filteredList = this.seoulList;
  },
};
</script>
