<template>
  <div class="tabInfo">
    <img :src="exhibitionList[0].InfoImg" alt="Info img" />
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
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>