<template>
  <div class="spinner">
    <!-- <v-progress-linear class="mt-7"
      indeterminate
      color="cyan"
    ></v-progress-linear>-->

    <!-- <v-progress-linear
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>-->

    <h4>{{text_info}}</h4>
    <v-progress-linear indeterminate color="cyan"></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: {
    text_info: String
  }
};
</script>

<style scoped>
.spinner {
  /* display: flex; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  width: 100%;
}
.text-info {
  width: 5rem;
  height: 5rem;
}
</style>
