<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/job/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-grand-gray-2 h-96"
        >
          <img :src="img" class="object-contain" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-meduim">{{ title }}</h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>
          <router-link
            to="/job/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See Jobs</router-link
          >
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import SpotLight from "@/components/JobSearch/SpotLight.vue";

export default {
  name: "Hero",
  components: {
    HeadLine,
    JobSearchForm,
    SpotLight,
  },
};
</script>
