import React from "react";
import { Gallery } from "./Gallery";
export default {
  title: "Gallery",
  component: Gallery,
  argTypes: {},
};
const Template = (args) => <Gallery {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};
