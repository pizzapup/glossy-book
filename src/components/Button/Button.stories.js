import React from "react";
import { Button } from "./Button";
import { FunButtons } from "./FunButtons/FunButtons";
export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    label: {
      label: { control: "text" },
      description: "Text/Content the component holds (children)",
    },
    variant: {
      control: "select",
      options: ["default", "outline", "text"],
      description: "Styles for button components; default | outline | text ",
    },
  },
  args: {
    label: "button",
  },
};
const Template = (args) => <Button {...args}>{args.label}</Button>;
export const BaseStyles = (args) => (
  <div style={{ display: "flex" }}>
    <Button {...args} variant="">
      {args.label}
    </Button>
    <Button {...args} variant="outline">
      {args.label}
    </Button>
    <Button {...args} variant="text">
      {args.label}
    </Button>
  </div>
);
BaseStyles.args = { label: "Button" };
export const Outline = Template.bind({});
BaseStyles.parameters = {
  docs: { storyDescription: "default site styles" },
};
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "",
};
Primary.parameters = {
  docs: {
    storyDescription: "primary button style for application",
  },
};
Outline.args = {
  label: "Outline Button",
  variant: "outline",
};

Outline.parameters = {
  docs: {
    storyDescription: "primary button style for application",
  },

  description: "Overwritten description",
  table: {
    type: {
      summary: "Something short",
      detail: "Something really really long",
    },
  },
};
export const Text = Template.bind({});
Text.args = {
  label: "Text Button",
  variant: "text",
};
Text.parameters = {
  docs: { storyDescription: "primary button style for application" },
};
