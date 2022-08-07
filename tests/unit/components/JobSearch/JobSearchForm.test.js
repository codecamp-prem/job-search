import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import { useRouter } from "vue-router";
jest.mock("vue-router");

describe("JobSearchForm", () => {
  describe("When user submits form", () => {
    it("direct's user to job results page with user's search parameters", async () => {
      const push = jest.fn();
      useRouter.mockReturnValue({
        push,
      });
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("vue js developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Kathmandu");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "vue js developer",
          location: "Kathmandu",
        },
      });
    });
  });
});
