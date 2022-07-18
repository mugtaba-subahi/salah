<template>
  <Spinner v-if="isLoading" />
  <template v-else>
    <Timer />
    <Heading class="heading" />
    <Prayer v-for="prayer in State().prayers" :key="prayer" v-bind="prayer" />
  </template>
</template>

<script lang="ts" setup>
import { onMounted, Component, ref } from "vue";
import { url } from "./config";
import { IApi } from "./interfaces";
import TimerComponent from "./components/Timer.vue";
import HeadingComponent from "./components/Heading.vue";
import PrayerComponent from "./components/Prayer.vue";
import SpinnerComponent from "./components/Spinner.vue";
import getDataHelper from "./helpers/getData";
import setDataHelper from "./helpers/setData";
import setConvertedTimeHelper from "./helpers/setConvertedTime";
import setNextPrayerHelper from "./helpers/setNextPrayer";
import { state as State } from "./store";

// components
const Timer: Component = TimerComponent;
const Heading: Component = HeadingComponent;
const Prayer: Component = PrayerComponent;
const Spinner: Component = SpinnerComponent;

// vairables
let isLoading = ref(true);

// hooks
onMounted(async () => {
  try {
    const data: IApi = await getDataHelper(url);
    setDataHelper(data);
    setConvertedTimeHelper();
    setNextPrayerHelper();

    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="postcss">
@tailwind base;

html,
body {
  @apply h-full;
}

body {
  font-family: "Roboto";
  background: linear-gradient(#031b4b, #660ca1);
  @apply text-white select-none p-4;
}
</style>

<style lang="postcss" scoped>
.heading {
  @apply mb-8;
}
</style>
