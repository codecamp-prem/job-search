import { mount } from "@vue/test-utils";

import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");

import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");

import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  const config = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("When user is on job page", () => {
    it("displays job count", () => {
      useConfirmRoute.mockReturnValue(true);

      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const wrapper = mount(SubNav, config());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });
  describe("When user is Not in job page", () => {
    it("DOES NOT displays job count", () => {
      useConfirmRoute.mockReturnValue(false);

      useFilteredJobs.mockReturnValue([]);

      const wrapper = mount(SubNav, config());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
