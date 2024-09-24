import ButtonCard from "../../lib/component/ButonCard.svelte";

export default {
  title: "Example/ButtonCard",
  component: ButtonCard,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    stat: "fullscreen",
  },
};

export const Label1 = {
  args: {
    label: "ButtonCard1",
    isButton: true,
    btnLabel: "Button1",
  },
};

export const Label2 = {
  args: {
    label: "ButtonCard2",
    isButton: false,
    btnLabel: "Button1",
  },
};
