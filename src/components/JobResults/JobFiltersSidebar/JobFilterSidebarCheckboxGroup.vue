<template>
  <accordian :header="header"
    ><div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              :data-test="value"
              @change="selectValue"
            /><label :for="value" data-test="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div></accordian
  >
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Accordian from "@/components/Shared/Accordian.vue";
export default {
  name: "JobFilterSidebarCheckboxGroup",
  components: {
    Accordian,
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const selectedValues = ref([]);

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };
    return { selectedValues, selectValue };
  },
};
</script>
