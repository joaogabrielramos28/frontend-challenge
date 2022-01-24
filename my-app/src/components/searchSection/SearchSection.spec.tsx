import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import SearchSection from "./index";
import "@testing-library/jest-dom";


afterEach(cleanup);
describe("Search Container component", () => {
  it("Should render select options", async () => {
    render(<SearchSection />);
    
    await waitFor(
      () => {
        expect(screen.getByTestId("Argentina")).toBeTruthy();
      },
      { timeout: 2000 }
    );
  });
});
