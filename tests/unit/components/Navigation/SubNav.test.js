import { mount } from "@vue/test-utils";

import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  const config = (routeName) => ({
    global: {
      mocks: {
        $route: { name: routeName },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("When user is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      const wrapper = mount(SubNav, config(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
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
