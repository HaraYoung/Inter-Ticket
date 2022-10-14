<template>
  <div>
    <v-calendar :attributes="attributes" @dayclick="onDayClick" />
    <star-rating />
  </div>
</template>
<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },

  data() {
    return {
      attrs: [
        {
          key: "today",
          dot: true,
          dates: new Date(),
        },
      ],
    };
  },
};
</script>
