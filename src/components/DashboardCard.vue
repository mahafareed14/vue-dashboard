<template>
  <div class="card">
    <div class="card-details">
      <p class="text-title">
        <vue3-autocounter
          ref="counter"
          :startAmount="0"
          :endAmount="number"
          :duration="1.5"
          :autoinit="true"
        />
      </p>
      <p class="text-body">{{ text }}</p>
    </div>
    <button class="card-button">More info</button>
  </div>
</template>

<script>
import Vue3Autocounter from "vue3-autocounter";
export default {
  name: "DashboardCard",
  props: {
    text: String,
    number: String,
  },
  components: {
    Vue3Autocounter,
  },
};
</script>
<style>
@import "../css/dashboardcard.css";
</style>
