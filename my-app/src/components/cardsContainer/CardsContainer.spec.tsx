import { render, screen, waitFor } from "@testing-library/react";
import CardsContainer from "./index";
import "@testing-library/jest-dom";
import { apiLocal } from "../../services/api";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(apiLocal);

const data = [
  {
    flag: "https://flagcdn.com/br.svg",
    country: "Brasil",
    local: "Rio de Janeiro",
    goal: "05/2026",
    id: 6,
  },
  {
    country: "Brasil",
    flag: "https://flagcdn.com/br.svg",
    local: "afe",
    goal: "22/2020",
    id: 7,
  },
];

describe("Cards Container Component", () => {
  it("should show goal cards", async () => {
    mock.onGet("cards").reply(200, data);
    render(<CardsContainer />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();

    
    await waitFor(()=>{
    const cards = screen.getByTestId("resolved");
    expect(cards).toBeInTheDocument();
   },{timeout:3000})
  });
});
