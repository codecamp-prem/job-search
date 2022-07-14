import { state, mutations, actions } from "@/store";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

describe("state", () => {
  it("keep track of whether user is logged in", () => {
    const initialState = state();
    expect(initialState.isLoggedIn).toBe(false);
  });
  it("Stores job Listing", () => {
    const initialState = state();
    expect(initialState.jobs).toEqual([]);
  });
});

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
});

describe("actions", () => {
  describe("fetch jobs", () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([
        {
          id: 1,
          tittle: "Software Engineer",
        },
      ]);
    });

    it("makes request to fetch jobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("sends message to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          tittle: "Software Engineer",
        },
      ]);
    });
  });
});
