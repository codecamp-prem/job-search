import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("TestInput", () => {
  it("communicates that user has enterd character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("C");
    input.setValue("CA");
    input.setValue("CAL");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["C"], ["CA"], ["CAL"]]);
  });
});
