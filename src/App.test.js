// import React from "react";
// import App from "./App";

// import { render, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// describe("To Do List rendering", () => {
//   it("Should render Heading", () => {
//     const { getByText } = render(<App />);
//     getByText("To-Do List");
//   });

//   it("Should render Label", () => {
//     const { getByText } = render(<App />);
//     getByText("Add Items to List");
//   });

//   it("Should render Placeholder text", () => {
//     const { getByPlaceholderText } = render(<App />);
//     getByPlaceholderText("Enter item");
//   });

//   it("Add items to list (Part 1)", () => {
//     const { getByText, getByLabelText } = render(<App />);

//     // Adding one item to the list
//     const input = getByLabelText("Add Items to List");
//     fireEvent.change(input, { target: { value: "Some list item entered." } });
//     fireEvent.click(getByText("Add #1"));
//     getByText("Some list item entered.");

//     getByText("Add #2");
//   });

//   it("Add items to list (Part 2)", () => {
//     const { getByText, getByLabelText } = render(<App />);

//     // Adding one item to the list
//     userEvent.type(getByLabelText("Add Items to List"), "List 1");
//     userEvent.click(getByText("Add #1"));
//     expect(document.querySelector("#todo1").textContent).toBe("List 1");
//     // Adding second item to the list
//     userEvent.type(getByLabelText("Add Items to List"), "List 2");
//     userEvent.click(getByText("Add #2"));
//     expect(document.querySelector("#todo2").textContent).toBe("List 2");

//     getByText("Add #3");
//   });
// });
