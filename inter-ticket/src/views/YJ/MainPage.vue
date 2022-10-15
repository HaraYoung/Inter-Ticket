<template>
  <div id="main">
    <b-container id="main-slide">
      <div class="left-box">
        <div class="detail-box">
          <p>전시 장소</p>
          <h2>전시명</h2>
          <p>전시일</p>
          <button class="btn btn-outline-secondary">자세히보기</button>
        </div>
        <carousel
          id="carousel"
          :autoplay="true"
          :loop="true"
          :nav="false"
          :items="6"
        >
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kor/2022/10/thumb/90843d997e45db2295332429744d5878_thumb.jpg"
          />
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kr/2022/10/thumb/3760a9dfd2ca0e8e3700db87b73e6455_thumb.jpg"
          />
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kor/2022/10/thumb/cf99d7f18eb27bfc31c60d8d636a98d6_thumb.jpg"
          />
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kor/2022/10/thumb/e3fc6c5ef3fc908b9125ba9e72d1acce_thumb.jpg"
          />
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kr/2022/09/thumb/8b7ee2e91c8f74949d82030fd990c44c_thumb.jpg"
          />
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kor/2022/10/thumb/0e8dc9ae260c7cbff2b10969f8ea3263_thumb.jpg"
          />
        </carousel>
      </div>
      <div class="right-box">
        <div class="img-box">
          <img
            src="https://www.sac.or.kr/upfile/uploadfile/asa/banner/banner/kr/2022/09/8b7ee2e91c8f74949d82030fd990c44c.jpg"
          />
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
#main {
  background-color: #e3caa5;
  display: flex;
  align-items: center;

  height: calc(100vh - 140px);
}

#main-slide {
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;

  background: linear-gradient(#ceab93 70%, #ad8b73 30%);
}

.left-box {
  padding: 50px;
  overflow: hidden;
}

.detail-box {
  margin-bottom: 100px;
}

#carousel {
  padding: 20px;
}

#carousel img {
  width: 87px;
  height: 114px;

  background-size: cover;
}

.right-box {
  padding: 50px 50px 50px 0;
}

.img-box img {
  width: 100%;
}
</style>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
};
</script>