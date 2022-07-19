<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        How the Team can help you?
      </h2>
    </template>
  </header-container>
</template>
<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default {
  name: "HowCanWeHelp",
  components: {
    HeaderContainer,
  },
};
</script>
