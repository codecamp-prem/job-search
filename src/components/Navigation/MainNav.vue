<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-1 left-1 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Jobs Search NP</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex item-center h-full ml-auto">
          <profile-image
            v-if="isLoggedIn"
            data-test="profile-image"
            @click="LOGOUT_USER"
          />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="login-button"
            @click="LOGIN_USER()"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="sub-nav" />
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import { LOGIN_USER, LOGOUT_USER } from "@/store/constants";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: "Jobs", url: "/job/results" },
        { text: "Locations", url: "/" },
        { text: "Life in Nepal", url: "/" },
        { text: "How we Help?", url: "/teams" },
        { text: "Contact Us", url: "/" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    ...mapState(["isLoggedIn"]), // mapState helps connect viewX store state to component properties.
  },
  methods: {
    ...mapMutations([LOGIN_USER, LOGOUT_USER]), // mapMutations helps connect viewX store mutations to component methods.
  },
};
</script>
