import { mount } from "@vue/test-utils";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h3>Main Title</h3>",
      },
    });
    expect(wrapper.text()).toMatch("Main Title");
  });
  it("allows parent component to provide Sub-title Content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h1>Some Sub-Title</h1>",
      },
    });
    expect(wrapper.text()).toMatch("Some Sub-Title");
  });
});
