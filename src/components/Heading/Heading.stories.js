import React from "react";
import Heading from "./Heading";
import { Card } from "../Card/Card";
export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    label: {
      label: { control: "text" },
      description: "Text/Content the component holds (children)",
    },
    variant: {
      control: "radio",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "",
    },
  },
  args: {
    label: "h1",
  },
  parameters: {
    componentSubtitle:
      "Renders a heading element (h1-h6) defined by the 'level' prop received",
  },
};
const Template = (args) => <Heading {...args}>{args.content}</Heading>;

export const Primary = Template.bind({});
Primary.args = { label: "Heading", level: "h2", content: "Heading Text Here!" };
export const CardExample = Template.bind({});
CardExample.args = {
  label: "Heading",
  level: "h2",
  content: <Card />,
};
