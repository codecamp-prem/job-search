import getters from "@/store/getters";
describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Rust" },
          { organization: "vue" },
          { organization: "Rust" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Rust", "vue"]));
    });
  });

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organization", () => {
      const state = {
        jobs: [
          { organization: "Rust" },
          { organization: "vue" },
          { organization: "carbon" },
        ],
        selectedOrganizations: ["Rust", "vue"],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Rust" },
        { organization: "vue" },
      ]);
    });
  });

  describe("When user has not selected any organization", () => {
    it("returns all jobs", () => {
      const state = {
        jobs: [
          { organization: "Rust" },
          { organization: "vue" },
          { organization: "carbon" },
        ],
        selectedOrganizations: [],
      };
      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Rust" },
        { organization: "vue" },
        { organization: "carbon" },
      ]);
    });
  });
});
