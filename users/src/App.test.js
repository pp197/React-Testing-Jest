import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on the screen", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  // const emailInput = screen.getByRole("textBox", {
  //   name: /email/i,
  // });

  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("Jane");
  // await user.click(emailInput);
  // await user.keyboard("Jane@Jane.com");

  await user.click(button);

  const name = screen.getByRole("cell", { name: "Jane" });
  expect(name).toBeInTheDocument();
});
