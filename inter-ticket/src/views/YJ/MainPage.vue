<!-- 파일 이름: MainPage.vue -->
<!-- 파일 설명: 메인 페이지 -->
<!-- 작성자: 황유진, 이메일: yjhwang@feelanet.com -->

<template>
  <div id="main" ref="main" @scroll="onScroll">
    <!-- 메인 전시 슬라이드 -->
    <v-container id="main-slide">
      <swiper class="swiper" :options="swiperOption" v-if="slideList">
        <!-- 루프 옵션을 돌려놨는데 메인 페이지에 처음 접속(새로고침)했을 때는 해당 옵션이 적용되지 않고
        다른 페이지로 이동했다가 다시 돌아오면 루프 옵션이 적용되는 버그가 있음
        화면에 데이터가 그려지는 시기와 루프 옵션이 적용되는 시기가 달라서 그런 걸까...?
        라이프 사이클에 대한 이해가 필요한 걸까...? -->
        <SlideBox v-for="item in slideList" :key="item.dp_seq" :item="item" />
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-container>
    <!-- 메인 전시 슬라이드 -->
    <!-- 전시 목록 영역 -->
    <v-container id="wrapper">
      <v-container id="content-box" class="p-5">
        <h2 class="mb-5">한 눈에 둘러보기</h2>
        <!-- Tab Menu 컴포넌트 재사용할 수 있을까? -->
        <b-button-group class="mb-5" v-if="tabMenu">
          <b-button
            squared
            v-for="tab in tabMenu"
            @click="listFilter(tab.id)"
            :key="tab.id"
            :class="[tab.id === tabId ? 'active' : null]"
            >{{ tab.name }}</b-button
          >
        </b-button-group>
        <div class="mt-3">
          <div class="grid" v-if="filteredList">
            <CategoryBox
              v-for="item in filteredList.slice(0, limit)"
              :key="item.dp_seq"
              :item="item"
            />
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- 전시 목록 영역 -->
  </div>
</template>

<script>
import { swiper } from "vue-awesome-swiper";
import SlideBox from "../../components/SlideBox.vue";
import CategoryBox from "../YJ/CategoryBox.vue";

export default {
  name: "MainPage",
  components: {
    swiper,
    SlideBox,
    CategoryBox,
  },
  props: ["totalList", "slideList"],
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
        autoplay: {
          delay: 3000,
        },
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
      //한눈에 보기 리스트 필터링을 위한 변수
      tabId: 0,
      limit: 12,
      scrollY: 0,
      innerHeight: 0,
      scrollHeight: 0,
    };
  },
  methods: {
    listFilter(id) {
      this.tabId = id;
    },
    //스크롤 감지해서 slice하는 개수 늘려주는 방식으로 구현하자...
    //computed를 중첩해도 괜찮나? filteredList 만든 다음에 그걸 받아서 또 slice된 데이터를 만드는 거지
    //아니면 slice(0, pageNum) 이런 식으로 해놓고 pageNum만 변경시키든지
    //이 로직을 뭘로 구현해야 할까? computed?
    //일단 무한 스크롤을 구현하기는 했는데 완전히 이해된 것은 아님...
    onScroll() {
      //문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환
      this.scrollY = window.scrollY;
      //window 전체 창 높이
      this.innerHeight = window.innerHeight;
      //위 두 가지 높이를 합한 것이 패딩과 테두리가 포함된 main 영역의 높이보다 클 때
      //(스크롤이 바닥에 가까워졌을 때) filteredList를 12개 더 추가
      if (scrollY + innerHeight > this.$refs.main.scrollHeight) {
        this.limit += 12;
      }
    },
  },
  computed: {
    //각 탭에 설정된 tabId 값으로 탭에 보여줘야 할 리스트 필터링
    filteredList() {
      if (this.tabId === 0) {
        return this.totalList.filter((item) => item.p_seq == 0);
      } else if (this.tabId === 1) {
        return this.totalList.filter((item) => item.p_seq == 1);
      } else if (this.tabId === 2) {
        return this.totalList.filter((item) => item.p_seq == 2);
      } else {
        return this.totalList.filter((item) => item.p_seq == 3);
      }
    },
  },
  mounted() {
    //브라우저의 스크롤에 이벤트 추가
    //윈도우에 스크롤 이벤트를 달면 전체 페이지에 이벤트가 달리는 것이라고 함
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

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
  background: linear-gradient(black 70%, #25c4c2 30%);
}

#wrapper {
  margin: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#content-box {
  background-color: #dce4ed;
  width: 100%;
  min-width: 1130px;
  margin: 12px;
}

h2 {
  font-weight: bold;
  color: black;
  text-align: center;
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
.btn {
  background-color: #25c4c2;
  border: none;
}

button {
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: bold;
}
</style>
