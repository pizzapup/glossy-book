import React from "react";

import { Accordian } from "./Accordian";
import "./Accordian.css";

export default {
  title: "Accordian",
  component: Accordian,
  argTypes: {
    label: {
      label: { control: "text" },
      description: "Text/Content the component holds (children)",
    },
    variant: {
      control: "radio",
      options: ["default", "outline", "text"],
      description: "",
    },
  },
  args: {
    label: "button",
  },
  parameters: {
    componentSubtitle: "primary button style for application",
  },
};
const Template = (args) => <Accordian {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Accordian" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };
