import useNextAndPreviousPages from "@/composables/useNextAndPreviousPages";

describe("useNextAndPreviousPages", () => {
  it("calculates page BEFORE current one", () => {
    const currentPage = { value: 8 };
    const maxPage = { value: 10 };

    const { previousPage } = useNextAndPreviousPages(currentPage, maxPage);
    expect(previousPage.value).toBe(7);
  });

  describe("When current page is the 1st page", () => {
    it("does not provide previous page", () => {
      const currentPage = { value: 1 };
      const maxPage = { value: 1 };

      const { previousPage } = useNextAndPreviousPages(currentPage, maxPage);
      expect(previousPage.value).toBeUndefined();
    });
  });

  it("calculates page AFTER current one", () => {
    const currentPage = { value: 5 };
    const maxPage = { value: 10 };

    const { nextPage } = useNextAndPreviousPages(currentPage, maxPage);
    expect(nextPage.value).toBe(6);
  });

  describe("When current page is the LAST page", () => {
    it("does not provide NEXT page", () => {
      const currentPage = { value: 5 };
      const maxPage = { value: 5 };

      const { nextPage } = useNextAndPreviousPages(currentPage, maxPage);
      expect(nextPage.value).toBeUndefined();
    });
  });
});
