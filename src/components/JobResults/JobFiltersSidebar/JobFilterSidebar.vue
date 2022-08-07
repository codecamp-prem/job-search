<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="clear filters" type="secondary" />
        </div>
      </div>
      <accordian header="Job Test"></accordian>
      <job-filter-sidebar-checkbox-group
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <job-filter-sidebar-checkbox-group
        header="Organizations"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordian from "@/components/Shared/Accordian.vue";

import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
import {
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

export default {
  name: "JobFilterSidebar",
  components: {
    ActionButton,
    Accordian,
    JobFilterSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();

    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_ORGANIZATIONS,
      ADD_SELECTED_JOB_TYPES,
    };
  },
};
</script>
