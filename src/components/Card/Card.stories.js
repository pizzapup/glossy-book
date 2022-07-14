import React from "react";
import { Card } from "./Card";
export default {
  title: "Card",
  component: Card,
  argTypes: {
    headingText: "",
    bodyText: "",
    buttonText: "",
    variant: { control: "select", options: ["primary", "secondary", "card"] },
  },
};
const Template = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: {
    description: "Card",
  },
  headingText: "heading text",
  bodyText:
    "primary TextBox is used for main section headings (product sections, hero text, etc",
  buttonText: "button text",
  size: "xl",
};
