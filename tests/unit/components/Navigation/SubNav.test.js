import { mount } from "@vue/test-utils";

import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  const config = (routeName, $store) => ({
    global: {
      mocks: {
        $route: { name: routeName },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("When user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      const $store = {
        getters: {
          FILTERED_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }],
        },
      };
      const wrapper = mount(SubNav, config(routeName, $store));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });
  describe("When user is Not in job page", () => {
    it("DOES NOT displays job count", () => {
      const routeName = "Home";
      const wrapper = mount(SubNav, config(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
