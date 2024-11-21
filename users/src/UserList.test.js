import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    {
      name: "Jane",
      email: "Jane@Jane.com",
    },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  return { users };
};

test("render one row per user", () => {
  //render the component
  renderComponent();
  //Find all the rows in the table
  //   screen.logTestingPlaygroundURL();
  const row = within(screen.getByTestId("users")).getAllByRole("row");

  //Assertion : correct number of rows in the table
  expect(row).toHaveLength(2);
});

test("render the email and name for each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    // const email = screen.getByRole("cell", { email: user.email });

    expect(name).toBeInTheDocument();
    // expect(email).toBeInTheDocument();
  }
});
