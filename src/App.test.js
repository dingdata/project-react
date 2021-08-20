import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/DLM project/i);
  expect(linkElement).toBeInTheDocument();
});

test("should find DLM Project Brand", () => {
  const { getByLabelText, getByText } = render(<App />);

  const testMain = getByLabelText("main");
  fireEvent.click(testMain);
  expect(getByText("My Main Page")).toBeInTheDocument();
});

test("should find Retrieve Traffic Page", () => {
  const { getByLabelText, getByText } = render(<App />);

  const testTraffic = getByLabelText("traffic");
  fireEvent.click(testTraffic);
  expect(getByText("Singapore Traffic Cams")).toBeInTheDocument();
});

test("should find Retrieve Verse Page", () => {
  const { getByLabelText, getByText } = render(<App />);

  const testVerse = getByLabelText("verse");
  fireEvent.click(testVerse);
  expect(getByText("Retrieve Verses")).toBeInTheDocument();
});

// test("Should receive Verse Page when clicked", async () => {
//   const { getByText, findAllByTestId } = render(<RetriveVerse />);
//   const getSearchVerse = getByText("SearchVerses");
//   fireEvent.click(getSearchVerse);

//   const retrieveVerse = await screen.findAllByTestId("retrieveVerse");
//   expect(retrieveVerse.length).toBeGreaterThan(0);
// });
