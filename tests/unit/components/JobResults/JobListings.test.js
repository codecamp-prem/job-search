import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings.vue";

import axios from "axios";
jest.mock("axios"); //mocked out version of axios

describe("JobListings", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });
  afterEach(() => {
    axios.get.mockReset();
  });
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("fetches Job listings", () => {
    const $route = createRoute();
    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://mytestsite.com/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const wrapper = shallowMount(JobListings, createConfig($route));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("When query params exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("When query params include page number", () => {
    it("displays page number", () => {
      const queryParams = { page: 4 };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 4");
    });
  });

  describe("When user is on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("show link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("When user is on last page of job results", () => {
    it("show link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" }; // per page 10 , so 15/10 = 2 page
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });

    it("show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: "2" }; // per page 10 , so 15/10 = 2 page
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });
  });
});
