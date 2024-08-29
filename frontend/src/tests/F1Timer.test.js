import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import F1Timer from "../components/F1Timer";
import axios from "axios";

jest.mock("axios");

describe("F1Timer Component", () => {
  it("should start and stop the timer", async () => {
    render(<F1Timer />);
    fireEvent.click(screen.getByText("Start"));
    await new Promise((r) => setTimeout(r, 1000));
    fireEvent.click(screen.getByText("Stop"));
    expect(axios.post).toHaveBeenCalled();
  });
});
