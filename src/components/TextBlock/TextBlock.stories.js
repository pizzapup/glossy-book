import React from "react";
import { TextBlock } from "./TextBlock";
export default {
  title: "TextBlock",
  component: TextBlock,
  argTypes: {
    headingText: "",
    bodyText: "",
    buttonText: "",
    variant: { control: "select", options: ["primary", "secondary", "card"] },
  },
  //   args: {
  //     label: {
  //       description: "TextBlock",
  //     },
  //     headingText: "heading text",
  //     bodyText: "body text goes here",
  //     buttonText: "button text",
  //   },
};
const Template = (args) => <TextBlock {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: {
    description: "TextBlock",
  },
  headingText: "heading text",
  bodyText:
    "primary TextBox is used for main section headings (product sections, hero text, etc",
  buttonText: "button text",
  size: "xl",
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: {
    description: "TextBlock",
  },
  headingText: "heading text",
  bodyText: "body text goes here",
  buttonText: "button text",
  size: "xl",
};

export const Card = Template.bind({});
Card.args = {
  variant: "card",
  label: {
    description: "TextBlock",
  },
  headingText: "heading text",
  bodyText: "body text goes here",
  buttonText: "button text",
  size: "xl",
};
