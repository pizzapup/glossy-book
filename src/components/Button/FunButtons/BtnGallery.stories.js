import React from "react";
import ButtonStories from "../Button.stories";
import { BtnGallery } from "./BtnGallery";
import { FunButtons } from "./FunButtons";
export default {
  title: "Design System/Buttons/FunButtons",
  component: BtnGallery,
  subcomponents: { FunButtons },
  parameters: {
    docs: {
      description: {
        component: "gallery view of all 'fun'button variants",
        story: "An example story description",
      },
    },
    argTypes: {
      label: {
        description: "Overwritten description",
        table: {
          type: {
            summary: "Something short",
            detail: "Something really really long",
          },
        },
        control: {
          type: null,
        },
      },
    },
  },
  argTypes: {
    label: { control: "text" },
  },
  args: {
    label: "button",
  },
};
export const FunButtonGallery = (args) => (
  <BtnGallery {...args} label="button" />
);
FunButtonGallery.parameters = {
  docs: {
    description: {
      story: "Individual story description, may contain `markdown` markup",
    },
  },
};
export const Sizes = (args) => (
  <div>
    <FunButtons {...args} size="large" />
    <FunButtons {...args} size="medium" />
    <FunButtons {...args} size="small" />
    <FunButtons {...args} size="tiny" />
  </div>
);
