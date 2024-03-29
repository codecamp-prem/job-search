<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-nowrap flex-row">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, computed } from "vue";

import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import useNextAndPreviousPages from "@/composables/useNextAndPreviousPages";

import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    onMounted(useFetchJobsDispatch);

    const filterdJobs = useFilteredJobs();
    const currentPage = useCurrentPage();
    const maxPage = computed(() => Math.ceil(filterdJobs.value.length / 10));

    const { previousPage, nextPage } = useNextAndPreviousPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filterdJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { currentPage, previousPage, nextPage, displayedJobs };
  },
};
</script>
