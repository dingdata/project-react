import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RetriveVerse from "./RetriveVerse";
import DisplayVerse from "./DisplayVerse";
import DisplayVerseBoard from "./DisplayVerseBoard";

test("Render default test", () => {
  render(<RetriveVerse />);
  const element = screen.getByText(/Verse you want to find/i);
  expect(element).toBeInTheDocument();
});

test("Should receive verse info when clicked", async () => {
  const { getByText } = render(<RetriveVerse />);
  const getSearchVerse = getByText("SearchVerses");
  fireEvent.click(getSearchVerse);

  const retrieveVerse = await screen.findAllByTestId("retrieveVerse");
  expect(retrieveVerse.length).toBeGreaterThan(0);
});

// test("should increase the list when there is input and button is clicked", () => {
//     const { getByText, getByLabelText } = render(<App />);
//     const addOneButton = getByText("Add-List"); //get button

//     const todogTextInput = getByLabelText("addnewlist"); //Identifies the txtInput using aria label
//     fireEvent.change(todoTextInput, {
//       target: { value: "2ndtodolist" },
//     }); //fireEvent to change the value of the prev identified input from "" to "todo1"

//     fireEvent.click(addOneButton);
//     expect(getByText("2ndtodolist")).toBeInTheDocument();
//   });
