import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RetrieveTraffic from "./RetrieveTraffic";

test("Render default test", () => {
  render(<RetrieveTraffic />);
  const element = screen.getByText(/Singapore Traffic Cams/i);
  expect(element).toBeInTheDocument();
});

test("Should receive Traffic info when clicked", async () => {
  const { getByText, findAllByTestId } = render(<RetrieveTraffic />);
  const getTrafficSubmit = getByText("Submit");
  fireEvent.click(getTrafficSubmit);
  // await waitFor(() => screen.findByText("2703"));

  const retrieveTrafficDivs = await screen.findAllByTestId("retrieveTraffic");
  expect(retrieveTrafficDivs.length).toBeGreaterThan(0);
});

// test("should increase the list when there is input and button is clicked", () => {
//     const { getByText, getByLabelText } = render(<App />);
//     const addOneButton = getByText("Add-List"); //get button

//     const todoTextInput = getByLabelText("addnewlist"); //Identifies the txtInput using aria label
//     fireEvent.change(todoTextInput, {
//       target: { value: "2ndtodolist" },
//     }); //fireEvent to change the value of the prev identified input from "" to "todo1"

//     fireEvent.click(addOneButton);
//     expect(getByText("2ndtodolist")).toBeInTheDocument();
//   });
