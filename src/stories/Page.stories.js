import { expect, userEvent, waitFor, within } from "@storybook/test";

import Page from "./Page.svelte";

import { useArgs } from "@storybook/manager-api";
// const [getCurrentStoryData, updateStoryArgs, resetStoryArgs] = useArgs();
// console.log(useArgs);

export default {
  title: "Example/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  Component: Page,
  props: args,
});

export const Default = Template.bind({});
Default.args = { user: { name: "Jane Doe" } };

export const LoggedOutForm = Template.bind({});
LoggedOutForm.args = {};

export const LogInForm = Template.bind({});
LogInForm.args = { user: { name: "Jane Doe" } };

export const LoggedOut = {
  args: {
    user: { name: "Jane Doe" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    let welcomeMsg = canvas.getByText((content, element) => {
      return element.textContent === "Welcome, Jane Doe!";
    });
    await expect(welcomeMsg).toBeInTheDocument();
    await expect(logoutButton).toBeInTheDocument();
    await userEvent.click(logoutButton);
    await waitFor(() => expect(logoutButton).not.toBeInTheDocument());
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();

    // context.args.user.name = "Yhs";

    // "Log in" 버튼 클릭
    await userEvent.click(loginButton);
    await waitFor(() => expect(loginButton).not.toBeInTheDocument());
  },
};

// // More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await waitFor(() => expect(loginButton).not.toBeInTheDocument());

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
