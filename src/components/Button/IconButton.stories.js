import React from "react";
import { IconButton } from "./IconButton";
import ICON from "./icons/GroovyIcons03.png";
import GroovyText from "./icons/GroovyIcons08.png";
import LavaLamp from "./icons/GroovyIcons09.png";
import Bus from "./icons/GroovyIcons10.png";
import Smiley from "./icons/GroovyIcons01.png";
import RainyRainbow from "./icons/GroovyIcons14.png";
import RollerSkate from "./icons/GroovyIcons16.png";
export default {
  title: "Icon Button",
  component: IconButton,
  argTypes: {
    label: {
      label: { control: "text" },
    },
    btnType: "icon",
    variant: { control: "select", options: ["default", "outline", "text"] },
    layout: {
      control: "select",
      options: {
        "icon at start (default)": "start" | "",
        "icon at end": "end",
        "icon only": "icon only",
      },
    },
    icon: {
      control: "select",
      options: {
        rainbow: ICON,
        GroovyText: GroovyText,
        LavaLamp: LavaLamp,
        Bus: Bus,
        Smiley: Smiley,
        RainyRainbow: RainyRainbow,
        RollerSkate: RollerSkate,
      },
    },
  },
  args: { icon: ICON, variant: "icon" },
};
const Template = (args) => <IconButton {...args}>{args.label}</IconButton>;
export const Primary = Template.bind({});
Primary.args = {
  label: "Icon Button",
  layout: "start",
};
export const End = Template.bind({});
End.args = {
  label: "Icon Button",
  layout: "end",
};
export const IconOnly = Template.bind({});
IconOnly.args = {
  layout: "iconOnly",
};
