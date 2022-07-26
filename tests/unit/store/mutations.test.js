import mutations from "@/store/mutations";
describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
  describe("RECEIVE_JOBS", () => {
    it("recieve jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["jobs 1", "jobs 2"]);
      expect(state).toEqual({ jobs: ["jobs 1", "jobs 2"] });
    });
  });
  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations from list of jobs", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["office1", "office2"]);
      expect(state).toEqual({ selectedOrganizations: ["office1", "office2"] });
    });
  });
});
