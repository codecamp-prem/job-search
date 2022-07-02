import { shallowMount, flushPromises } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings.vue";

import axios from "axios";
jest.mock("axios"); //mocked out version of axios

describe("JobListings", () => {
  it("fetches Job listings", () => {
    axios.get.mockResolvedValue({ data: [] }); // async or promise
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each recieved job", async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
