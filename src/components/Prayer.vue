<template>
  <div class="prayer-component" :class="{ prayed: content.prayed, next: content.next, passed: content.passed }" @click="togglePrayed">
    <input class="hidden-checkbox" type="checkbox" v-model="content.prayed" />
    <p class="prayer__item prayer__item--name">{{ content.name }}</p>
    <p class="prayer__item">{{ content.time }}</p>
    <img class="prayer__item prayer__item--vibration" :src="content.icon" @click.capture="content.changeIcon" />
  </div>
</template>

<script >
import PrayerClass from "../classes/Prayer";

export default {};
</script>

<style lang="less" scoped>
@import (reference) "../styles/index.less";
.prayer-component {
  .mega;
  .pad-tb-3;
  .push-down-2--5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  border-radius: 2px;
  transition: 0.3s;
  opacity: 0.5;
}

.prayer__item {
  line-height: 32px;

  &:hover {
    cursor: pointer;
  }
  &--name {
    justify-self: start;
    padding-left: 20px;
  }
  &--name:before {
    .micro;
    .push-right-3;
    font-family: "Ionicons";
    content: "\f372";
  }
  &--vibration {
    width: 26px;
  }
}

.hidden-checkbox {
  display: none;

  &:checked + .prayer__item--name:before {
    content: "\f374";
  }
}

// dynamic styles
.prayed {
  box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.12);
  background: @primary-color !important;
  opacity: 1;
}

.next {
  opacity: 1;
}

.passed {
  background-color: rgba(119, 154, 184, 0.384);
  opacity: 1;
}
</style>
