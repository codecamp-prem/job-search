import { mount } from "@vue/test-utils";

import Accordian from "@/components/Shared/Accordian.vue";

describe("Accordian", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
    },
    slots: {
      default: "<h3>Nested child</h3>",
    },
    ...config,
  });
  it("renders child", async () => {
    const config = {
      slots: {
        default: "<h3>Nested child</h3>",
      },
    };
    const wrapper = mount(Accordian, createConfig(config));
    expect(wrapper.text()).not.toMatch("Nested child");
    const clickAbleArea = wrapper.find("[data-test='clickable-area']");
    await clickAbleArea.trigger("click");
    expect(wrapper.text()).toMatch("Nested child");
  });
  describe("when we do not provide custom child content", () => {
    it("renders the default content", async () => {
      const config = {
        slots: {},
      };
      const wrapper = mount(Accordian, createConfig(config));
      const clickAbleArea = wrapper.find("[data-test='clickable-area']");
      await clickAbleArea.trigger("click");
      expect(wrapper.text()).toMatch("Opps!! Maybe coming soon!!");
    });
  });
});
