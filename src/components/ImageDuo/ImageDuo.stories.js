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
    images: ["https://place-puppy.com/400x700", "https://placedog.net/400/700"],
  },
};
const Template = (args) => <ImageDuo {...args} />;
export const Primary = Template.bind({});
