import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Displays the company Name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Jobs Search NP");
  });
});
