import { useRoute } from "vue-router";
jest.mock("vue-router");

import useCurrentPage from "@/composables/useCurrentPage";

describe("useCurrentPage", () => {
  describe("When query param include page", () => {
    it("returns page", () => {
      useRoute.mockReturnValue({
        query: {
          page: "7",
        },
      });
      const result = useCurrentPage();
      expect(result.value).toBe(7);
    });
  });
  describe("When query param exclude page", () => {
    it("defaults to page 1", () => {
      useRoute.mockReturnValue({
        query: {},
      });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
