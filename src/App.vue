<template>
  <div class="root">
    <div class="app-timer">
      <p class="app-timer__item" v-if="!nextPrayer.passed">{{ nextPrayer.english }} in</p>
      <p class="app-timer__item app-timer--timer" v-if="!nextPrayer.passed">{{ remainder }}</p>
      <p class="app-timer__item" v-else>All prayers passed</p>
    </div>

    <app-section class="app-section" />
    <div class="prayers" :class="{passed: prayer.passed, isNext: prayer.isNext}" v-for="prayer in data" :key="prayer.english">
      <p class="prayers__item prayers__item--english">{{ prayer.english }}</p>
      <p class="prayers__item">{{ prayer.time }}</p>
      <p class="prayers__item prayers__item--arabic">{{ prayer.arabic }}</p>
    </div>
  </div>
</template>

<script>
import TinyTimer from "tiny-timer";
import moment from "moment";

import Section from "./components/Section.vue";
import getData from "./helpers/getData";

import timeHandler from "./helpers/timeHandler";

export default {
  components: { "app-section": Section },
  data() {
    return {
      data: [],
      date: "",
      nextPrayer: {
        time: "",
        passed: false,
        english: ""
      },
      remainder: "..."
    };
  },
  methods: {
    setupNextPrayer() {
      const nextPrayer = this.data.find(current => !current.passed);

      if (!nextPrayer) return;

      this.nextPrayer = nextPrayer;
      this.nextPrayer.isNext = true;
      this.startTimer();
    },
    startTimer() {
      const remainderMS = timeHandler(this.nextPrayer.time, "remainder");

      const now = new Date();
      const timer = new TinyTimer();

      timer.start(remainderMS);
      timer.on("tick", tick => {
        this.remainder = moment("2000-01-01 00:00:00")
          .add(moment.duration(tick))
          .format("H[h] m[min] s[s]");
      });

      timer.on("done", () => {
        // get index of prayer that just passed
        const justPassedIndex = this.data.findIndex(
          current => this.nextPrayer.english === current.english
        );

        this.data[justPassedIndex].passed = true;
        this.data[justPassedIndex].isNext = false;
        this.setupNextPrayer();
      });
    }
  },
  async mounted() {
    this.data = await getData();
    this.setupNextPrayer();
  }
};
</script>

<style lang="scss">
@import "./styles/reset.css";

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 1.5rem;
  user-select: none;
}
</style> 

<style lang='scss' scoped>
.root {
  padding: 10px;
  min-height: 100%;
  color: white;
  background: linear-gradient(#031b4b, #660ca1);
  padding: 16px;
}

.app-timer {
  margin-bottom: 32px;
  display: grid;
  justify-items: center;

  &__item {
    opacity: 0.5;
    font-size: 0.8889rem;
    line-height: 1.5rem;
  }

  &--timer {
    font-size: 1.4238rem;
    line-height: 1.875rem;
    opacity: 1;
  }
}

.app-section {
  margin-bottom: 32px;
}

.prayers {
  font-size: 1.125rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  transition: 0.3s;
  opacity: 0.5;
  // background-color: red;
  padding: 0 20px;
  border-radius: 3px;

  &__item {
    justify-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &--english {
      justify-self: start;
    }

    &--arabic {
      justify-self: end;
      font-size: 1.25rem;
      letter-spacing: 0.3px;
    }
  }
}

.isNext,
.passed {
  opacity: 1;
}

.isNext {
  background-color: #0d6cda;
}
</style>
