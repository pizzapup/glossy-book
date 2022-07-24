import React from "react";

import { Link } from "./Link";
import "./Link.css";

export default {
  title: "Link",
  component: Link,
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
const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Link" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };
