import React from "react";
import { FunButtons } from "./FunButtons";

export default {
  title: "Buttons",
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
        "atlas",
        "kari",
        // "rhea",
        // "narvi",
        // "hati",
      ],
    },
  },
  args: {
    label: "button",
    variant: "Bestia",
  },
};
const Template = (args) => <FunButtons {...args}>{args.label}</FunButtons>;
export const FunStyles = Template.bind({});
FunStyles.args = { variant: "bestia" };
