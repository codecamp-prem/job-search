import { mount, flushPromises } from "@vue/test-utils";
import SpotLight from "@/components/JobSearch/SpotLight.vue";
import axios from "axios";
jest.mock("axios");

describe("SpotLight", () => {
  const mockSpotLightRespone = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "Some Image",
          title: "Some Title",
          description: "Some Description",
          ...data,
        },
      ],
    });
  };
  it("provides img attribute to parent component", async () => {
    const data = { img: "Some Image" };
    mockSpotLightRespone({ data });
    const wrapper = mount(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
        <h2>{{slotProps.img}}</h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some Image");
  });

  it("provides title attribute to parent component", async () => {
    const data = { title: "Some Title" };
    mockSpotLightRespone({ data });
    const wrapper = mount(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
        <h2>{{slotProps.title}}</h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some Title");
  });

  it("provides description attribute to parent component", async () => {
    const data = { description: "Some Description" };
    mockSpotLightRespone({ data });
    const wrapper = mount(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
        <h2>{{slotProps.description}}</h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some Description");
  });
});
