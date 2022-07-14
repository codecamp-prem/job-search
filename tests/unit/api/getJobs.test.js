import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";
describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Vue js Developer",
        },
      ],
    });
  });

  it("fetches job that candidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://mytestsite.com/jobs");
  });

  it("Extracts jobs from response", async () => {
    const data = await getJobs();
    expect(data).toEqual([
      {
        id: 1,
        title: "Vue js Developer",
      },
    ]);
  });
});
