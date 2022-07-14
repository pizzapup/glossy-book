import React from "react";
import { Button } from "./Button";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      label: { control: "text" },
    },
    variant: { control: "select", options: ["default", "outline", "text"] },
  },
};
const Template = (args) => <Button {...args}>{args.label}</Button>;
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  // variant: "default",
};
export const Outline = Template.bind({});
Outline.args = {
  label: "Outline Button",
  variant: "outline",
};
export const Text = Template.bind({});
Text.args = {
  label: "Text Button",
  variant: "text",
};
