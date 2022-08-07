import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue";

describe("JobFilterSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "test header",
      uniqueValues: new Set(["test1", "test2"]),
      mutation: "test mutation",
      ...props,
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    const props = {
      uniqueValues: new Set(["test1", "test2"]),
    };
    const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputValues = inputLabels.map((node) => node.text());
    expect(inputValues).toEqual(["test1", "test2"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const props = {
        mutation: "TEST_MUTATION",
        uniqueValues: new Set(["Intern"]),
      };
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });
      const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const valueInput = wrapper.find("[data-test='Intern']");
      await valueInput.setChecked();

      expect(commit).toHaveBeenCalledWith("TEST_MUTATION", ["Intern"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      useStore.mockReturnValue({ commit: jest.fn() });

      const props = {
        uniqueValues: new Set(["Intern"]),
      };

      const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const valueInput = wrapper.find("[data-test='Intern']");
      await valueInput.setChecked();
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
