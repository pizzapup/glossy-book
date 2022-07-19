import React from "react";
import { ImageDuo } from "./ImageDuo";
export default {
  title: "ImageDuo",
  component: ImageDuo,
  argTypes: {
    images: [
      "https://place-puppy.com/300x450",
      "https://place-puppy.com/300x450",
    ],
  },
  args: {
    label: {
      description: "Image Duo",
    },
    images: ["https://place-puppy.com/600x800", "https://placedog.net/600/800"],
  },
};
const Template = (args) => <ImageDuo {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  images: ["https://place-puppy.com/600x800", "https://placedog.net/600/800"],
};
