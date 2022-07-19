import React from "react";
import { SectionLayout } from "./SectionLayout";
export default {
  title: "SectionLayout",
  component: SectionLayout,
  argTypes: {
    deviceView: { control: "select", options: ["vertical", "horizontal"] },
    variantType: "section",
    alignment: "center",
    headingText: "Section TextBlock",
    bodyText: "body content of primary textblock component",
    buttonText: "Section Button",
    images: [
      "https://place-puppy.com/300x450",
      "https://place-puppy.com/300x450",
    ],
  },
};
const Template = (args) => <SectionLayout {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  variantType: "section",
  alignment: "center",
  headingText: "Section TextBlock",
  bodyText: "body content of primary textblock component",
  buttonText: "Section Button",
  images: [
    "https://place-puppy.com/400x600",
    "https://place-puppy.com/400x600",
  ],
  deviceView: "vertical",
  reverse: true,
};
