// 전시 상세 정보 영역 
<template>
  <div class="tabInfo">
    <img :src="exhibitionList[0].InfoImg" alt="Info img" width="85%"/>
  </div>
</template>
  
  <script>
import tempData from "@/assets/tempData.json";
const exhibitionList = tempData.exhibitionList;

export default {
  data: function() {
    return {
      exhibitionList
    };
  }
};
</script>
  
  <style>
.tabInfo {
  text-align: center;
  margin-right: 0.5em;
}
</style>