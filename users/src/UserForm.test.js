import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  //Mock function for onUserAdd
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  // const emailInput = screen.getByRole("textBox", {
  //   name: /email/i,
  // });

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // Simulate typing in an email
  // await user.click(emailInput);
  // await user.keyboard("jane@jane.com");

  // Find the button
  const button1 = screen.getByRole("button");

  // Simulate clicking the button
  await user.click(button1);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  // check if mock function have been called
  expect(mock).toHaveBeenCalled();
  //check with what values mock function have been called with
  // expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
