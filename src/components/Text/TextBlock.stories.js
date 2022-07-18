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
    alignment: { control: "select", options: ["center", "left"] },
  },
  args: {
    label: {
      description: "TextBlock",
    },
    headingText: "heading text",
    bodyText: "body text goes here",
    buttonText: "button text",
  },
};
const Template = (args) => <TextBlock {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  headingText: "Primary TextBlock",
  bodyText: "body content of primary textblock component",
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  headingText: "Secondary TextBlock",
  bodyText: "body content of secondary textblock component",
};
export const Card = Template.bind({});
Card.args = {
  variant: "card",
  button: "outline",
  headingText: "Card TextBlock",
  bodyText: "body content of card textblock component",
};
export const Section = Template.bind({});
Section.args = {
  variant: "primary",
  variantType: "section",
  alignment: "center",
  headingText: "Section TextBlock",
  bodyText: "body content of primary textblock component",
  buttonText: "Section Button",
};
