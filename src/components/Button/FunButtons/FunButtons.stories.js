import React from "react";
import { FunButtons, Gallery, list } from "./FunButtons";

export default {
  title: "Buttons/Fun Buttons",
  component: FunButtons,
  argTypes: {
    label: {
      label: { control: "text" },
    },
    variant: {
      control: "select",
      options: [
        "bestia",
        "hyperion",
        "pan",
        "hyperion",
        "mimas",
        "atlas",
        "kari",
        "atlas",
        "pandora",
        "janus",
        "anthe",
        "pallene",
        "telesto",
        "calypso",
        "skoll",
        "greip",
        "dione",
        "helene",
        "kari",
      ],
    },
  },
  args: {
    label: "button",
  },
};
const Template = (args) => <FunButtons {...args}>{args.label}</FunButtons>;
export const FunStyles = Template.bind({});
FunStyles.args = { variant: "bestia" };
