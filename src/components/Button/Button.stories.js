import React from "react";
import { Btn, Button } from "./Button";
import { CompositeButton } from "./CompositeButton";
export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;
export const Primary = Template.bind({});
Primary.args = { label: "Button" };
export const Secondary = Template.bind({});
Primary.args = { label: "Button" };
export const Outline = () => <Button outlined>Button</Button>;
export const Text = () => <Button text>Button</Button>;
export const Icon = () => (
  <CompositeButton
    icon={
      <svg width="30px" height="30px">
        <g>
          <path d="M8.2.05C5.486.05 3.25 2.286 3.25 5S5.486 9.95 8.2 9.95 13.15 7.714 13.15 5 10.914.05 8.2.05zM4.75 5c0-1.886 1.564-3.45 3.45-3.45 1.886 0 3.45 1.564 3.45 3.45 0 1.886-1.564 3.45-3.45 3.45-1.886 0-3.45-1.564-3.45-3.45zm-1.22 9.43a6.743 6.743 0 0 1 4.77-1.98c1.799 0 3.508.72 4.77 1.98a6.743 6.743 0 0 1 1.98 4.77.75.75 0 0 0 1.5 0c0-2.201-.88-4.291-2.42-5.83a8.242 8.242 0 0 0-5.83-2.42c-2.201 0-4.291.88-5.83 2.42A8.242 8.242 0 0 0 .05 19.2a.75.75 0 0 0 1.5 0c0-1.799.72-3.509 1.98-4.77z"></path>
        </g>
      </svg>
    }
  >
    Button
  </CompositeButton>
);
