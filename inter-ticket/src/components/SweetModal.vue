<template>
  <div>
    <sweet-modal
      ref="modal"
      icon="error"
      hide-close-button
      blocking
      overlay-theme="dark"
      modal-theme="dark"
    >
      This is an error…

      <sweet-button slot="button" color="red" v-on:click="closeHandler"
        >Press this Button</sweet-button
      >
    </sweet-modal>
    <button @click="openHandler">모달</button>
  </div>
</template>
<script>
import Vue from "vue";
import VCalendar from "v-calendar";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});

export default {
  name: "SweetModal",
  methods: {
    openHandler() {
      this.$refs.modal.open();
    },
    closeHandler() {
      this.$refs.modal.close();
    },
  },
};
</script>
