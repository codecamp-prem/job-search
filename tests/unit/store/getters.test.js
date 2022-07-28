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

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const state = {
        jobs: [
          { jobType: "Military" },
          { jobType: "Programmer" },
          { jobType: "Military" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Military", "Programmer"]));
    });
  });

  describe("INCLUDE_JOBS_BY_ORGANIZATION", () => {
    describe("When the user has not selected any organization", () => {
      it("includes job", () => {
        const state = {
          selectedOrganizations: [],
        };
        const job = { organization: "Microsoft" };
        const includeJob = getters.INCLUDE_JOBS_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    describe("When the user has selected any organization", () => {
      it("identifies if job is associated with given organization", () => {
        const state = {
          selectedOrganizations: ["Microsoft", "BlackRock"],
        };
        const job = { organization: "BlackRock" };
        const includeJob = getters.INCLUDE_JOBS_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });
  describe("INCLUDE_JOBS_BY_JOB_TYPE", () => {
    describe("When the user has not selected any job type", () => {
      it("includes job", () => {
        const state = {
          selectedJobTypes: [],
        };
        const job = { jobType: "Intern" };
        const includeJob = getters.INCLUDE_JOBS_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    describe("When the user has selected any job type", () => {
      it("identifies if job is associated with given job type", () => {
        const state = {
          selectedJobTypes: ["Intern", "Temporary"],
        };
        const job = { jobType: "Intern" };
        const includeJob = getters.INCLUDE_JOBS_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organization and job type", () => {
      const INCLUDE_JOBS_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOBS_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOBS_BY_ORGANIZATION,
        INCLUDE_JOBS_BY_JOB_TYPE,
      };

      const job = { id: 1, title: "Best Trillionaire" };
      const state = {
        jobs: [job],
      };
      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOBS_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOBS_BY_JOB_TYPE).toHaveBeenCalledWith(job);
    });
  });
});
