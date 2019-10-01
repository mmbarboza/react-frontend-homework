import { render, fireEvent, findAllByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import App from "./App";
import HotelList from "../HotelList/HotelList";


describe("test the App component", () => {
  test("renders the search div", () => {
    const { container, getByText } = render(<App />);
    expect(getByText("Reset")).toBeInTheDocument();
  });

  test("renders the select tags", () => {
    const { container, getByText } = render(<App />);
    expect(getByText("Price low-to-high")).toBeInTheDocument();
  });

  test("searching for a hotel that doesn't exist will return an error", () => {
    const { getByTestId, rerender, queryByTestId } = render(<App />);
    fireEvent.change(getByTestId("search-hotel"), {
      target: { value: "tomato" }
    });
    expect(queryByTestId("search-error")).toHaveTextContent('No hotels match your search');


    ]
  });
});
