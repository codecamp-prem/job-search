<template>
  <accordian header="Organizations"
    ><div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="VueTube" type="checkbox" class="mr-3" /><label
              for="VueTube"
              >VueTube</label
            >
          </li>
          <li class="w-1/2 h-8">
            <input id="Between vue and me" type="checkbox" class="mr-3" /><label
              for="Between vue and me"
              >Between vue</label
            >
          </li>
          <li class="w-1/2 h-8">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" /><label
              for="Et Vue Brute"
              >Et Vue Brute</label
            >
          </li>
          <li class="w-1/2 h-8">
            <input id="Vue and a half men" type="checkbox" class="mr-3" /><label
              for="Vue and a half men"
              >Vue and a half men</label
            >
          </li>
        </ul>
      </fieldset>
    </div></accordian
  >
</template>

<script>
import Accordian from "@/components/Shared/Accordian.vue";
export default {
  name: "JobFilterSidebarOrganizations",
  components: {
    Accordian,
  },
};
</script>
