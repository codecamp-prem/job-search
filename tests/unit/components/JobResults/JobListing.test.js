import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Vue Company",
    ...jobProps,
  });
  const config = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const jobProps = createJobProps();
    const wrapper = mount(JobListing, config(jobProps));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job Organization", () => {
    const jobProps = createJobProps({ organization: "Vue SuperHero" });
    const wrapper = mount(JobListing, config(jobProps));
    expect(wrapper.text()).toMatch("Vue SuperHero");
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["Kathmandu", "Lalitpur"] });
    const wrapper = mount(JobListing, config(jobProps));
    expect(wrapper.text()).toMatch("Kathmandu");
    expect(wrapper.text()).toMatch("Lalitpur");
  });

  it("renders Min. job Qualification", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["System Design", "code"],
    });
    const wrapper = mount(JobListing, config(jobProps));
    expect(wrapper.text()).toMatch("System Design");
    expect(wrapper.text()).toMatch("code");
  });

  it("links to individual job's page", () => {
    const jobProps = createJobProps({
      id: 10,
    });
    const wrapper = mount(JobListing, config(jobProps));
    const jobLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobLink.props("to");
    expect(toProp).toBe("/job/results/10");
  });
});
