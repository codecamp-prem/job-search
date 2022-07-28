import state from "@/store/state";
describe("state", () => {
  it("keep track of whether user is logged in", () => {
    const initialState = state();
    expect(initialState.isLoggedIn).toBe(false);
  });
  it("Stores job Listing", () => {
    const initialState = state();
    expect(initialState.jobs).toEqual([]);
  });
  it("stores organizations that the user would like to filter jobs by", () => {
    const initialState = state();
    expect(initialState.selectedOrganizations).toEqual([]);
  });
  it("stores job types that the user would like to filter by", () => {
    const initialState = state();
    expect(initialState.selectedJobTypes).toEqual([]);
  });
});
