<template>
  <img :src="defaultProfileImage" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
import defaultProfileImage from "@/assets/images/zelda.png";
export default {
  name: "ProfileImage",
  data() {
    return {
      defaultProfileImage,
    };
  },
};
</script>
