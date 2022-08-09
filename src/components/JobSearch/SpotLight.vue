<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "SpotLight",
  setup() {
    const spotlights = ref([]);
    const getSpotlights = async () => {
      const baseURL = process.env.VUE_APP_API_URL;
      const url = `${baseURL}/spotlights`;
      const response = await axios.get(url);
      spotlights.value = response.data;
    };

    onMounted(getSpotlights);

    return { spotlights };
  },
};
</script>
