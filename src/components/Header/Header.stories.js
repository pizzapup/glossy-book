import React from "react";

import { Header } from "./Header";
import "./Header.css";

export default {
  title: "Header",
  component: Header,
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
  parameters: {
    docs: {
      description: {
        component: ` \`The <header>\` HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.
   
| Name   | Type   | Description          |
| ------ | ------ | -------------------- |
| Header | \`<header></header>\`   | \`The <header>\` HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements. |
| path | string | Path to the resource |
          `,
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "Header" };
