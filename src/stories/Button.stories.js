import Button from "./Button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button1",
  },
};

export const Secondary = {
  args: {
    label: "Button2",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button3",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button4",
  },
};
