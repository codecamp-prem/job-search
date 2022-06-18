import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("clickable");
  });
  it("applies one of the several styles to the button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
