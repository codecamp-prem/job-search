<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for Everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job in Nepal.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";

export default {
  name: "HeadLine",
  data() {
    return {
      action: "Job",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Job", "Careers", "Opportunity", "Work"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>
<style scoped>
.job {
  color: #1a73e8;
}
.careers {
  color: #34a853;
}
.opportunity {
  color: #f9ab00;
}

.work {
  color: #d93025;
}
</style>
