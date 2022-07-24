import React from "react";
import { IconLink, Twitter } from "./IconLink";
import "./IconLink.css";
export default {
  title: "Design System/Links/IconLink",
  id: "icon-link",
  component: IconLink,
  argTypes: {
    label: {
      label: { control: "text" },
      description: "Text/Content the component holds (children)",
    },
    title: "",
    Icon: Twitter,
    href: "#",
    onClick: function (e) {
      e.preventDefault();
      console.log("clicked! demo-link");
    },
  },
  args: {
    label: "IconLink",
    href: "#",
    onClick: function (e) {
      e.preventDefault();
      console.log("clicked! demo-link");
    },
    title: "",
    Icon: Twitter,
  },
  parameters: {
    componentSubtitle: "primary IconLink style for application",
  },
};
export const DemoGallery = (args) => (
  <ul className="demo-gallery">
    <li className="demo-gallery-item">
      <IconLink {...args} className="demo-link" title="demo-link" />
      <span>demo-link</span>
    </li>
    <li className="demo-gallery-item">
      <IconLink {...args} className="style-one" title="style-one" />
      <span>style-one</span>
    </li>
    <li className="demo-gallery-item">
      <IconLink
        {...args}
        className="style-two"
        title="style-two twitter-border"
      />
      <span>style-two</span>
    </li>
    <li className="demo-gallery-item">
      <IconLink
        {...args}
        className="link border-pink style-three"
        title="border-pink"
      />
      <span>style-two</span>
    </li>{" "}
    <li className="demo-gallery-item">
      <IconLink
        {...args}
        className="link border-blue style-three"
        title="border-blue"
        style={{ "--color-icon-link": "blue" }}
      />
      <span>style-three</span>
    </li>{" "}
  </ul>
);

const Template = (args) => <IconLink {...args} />;
export const DemoLink = Template.bind({});
DemoLink.args = {
  className: "demo-link",
  title: "demolink",
};
export const StyleOne = Template.bind({});
StyleOne.args = {
  className: "style-one",
  title: "styleone",
};
export const StyleTwo = Template.bind({});
StyleTwo.args = {
  className: "style-two",
  title: "styletwo",
};
