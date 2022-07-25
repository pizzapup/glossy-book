import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      label: { control: "text" },
      description: "Text/Content the component holds (children)",
    },
    variant: {
      control: "radio",
      options: ["default", "outline", "text"],
      description: "Styles for button components; default | outline | text ",
    },
    table: {
      type: { summary: "string" },
    },
  },
  args: {
    label: "button",
  },
  parameters: {
    componentSubtitle: "primary button style for application",
    docs: {
      description: {
        component: `
# Styling Guidelines 

**Outline:**

## Keyboard Interaction

When the button has focus:
- \`Space\`: Activates the button.
- \`Enter\`: Activates the button.
- Following button activation, focus is set depending on the type of action the button performs. For example:
    - If activating the button opens a dialog, the focus moves inside the dialog.
    - If activating the button closes a dialog, focus typically returns to the button that opened the dialog unless the function performed in the dialog context logically leads to a different element. <br/> For example, activating a cancel button in a dialog returns focus to the button that opened the dialog. However, if the dialog were confirming the action of deleting the page from which it was opened, the focus would logically move to a new context.
    - If activating the button does not dismiss the current context, then focus typically remains on the button after activation, e.g., an Apply or Recalculate button.
    - If the button action indicates a context change, such as move to next step in a wizard or add another search criteria, then it is often appropriate to move focus to the starting point for that action.
    - If the button is activated with a shortcut key, the focus usually remains in the context from which the shortcut key was activated. For example, if \`Alt + U\` were assigned to an "Up" button that moves the currently focused item in a list one position higher in the list, pressing \`Alt + U\` when the focus is in the list would not move the focus from the list.

## WAI-ARIA Roles, States, and Properties
- The button has role of [button](https://w3c.github.io/aria/#button)
- The button has an accessible label. By default, the accessible name is computed from any text content inside the button element. However, it can also be provided with \`aria-labelledby\` or \`aria-label\`
- If a description of the button's function is present, the button element has aria-describedby set to the ID of the element containing the description.
- When the action associated with a button is unavailable, the button has \`aria-disabled\` set to \`true\`.
- If the button is a toggle button, it has an \`aria-pressed\` state. When the button is toggled on, the value of this state is \`true\`, and when toggled off, the state is \`false\`.

https://www.w3.org/WAI/ARIA/apg/patterns/button/



 






Focus outlines provide visual feedback for keyboard navigation, letting users who can't use a mouse or have a visual impairment know where they are on the screen. 
Customizations: 
- **Color** sets the color of an element’s outline
- **Style** sets the style of an element’s outline (solid, dashed, dotted, etc…)
- **Width** sets the thickness of an element’s outline

**Box-shadow:**
Box-shadow can have the appearance of an outline or border and offers more flexibility than outline or border for customizing.
An example of a box-shadow focus style on a button, link and text input on both light and dark backgrounds side by side.
Customizations:

- **Color** sets the color of an element’s box-shadow
- **Position (X/Y)** sets the horizontal and vertical distance of the box-shadow
- **Blur radius** sets the amount of blur to be applied to the box-shadow
- **Spread radius** sets the amount the box-shadow will spread
- *You can apply multiple box shadows to an element*
Text-decoration underline
Text-decoration underline only works for buttons and links and does not work for form elements such as text inputs or radio buttons.

An example of a text-decoration underline focus style on a button, link and text input on both light and dark backgrounds side by side.

Customizations:

Color - sets the color of decorations
Line - sets the kind of decoration that is used
Style - sets the style of the lines specified (solid, dashed, dotted, etc…)
Thickness - sets the stroke thickness of the decoration line

Border
Borders can have the appearance of an outline that hugs the element it’s applied to or can appear as an underline if only applying the border to the bottom.

An example of a border focus style on a button, link and text input on both light and dark backgrounds side by side.

Customizations:

Color - sets the color of an element’s outline
Style - sets the style of an element’s outline (solid, dashed, dotted, etc…)
Width - sets the thickness of an element’s outline
Border-radius - sets the amount of rounding applied to the corners of an element’s outer border edge
Background Color
Background color offers the least amount of customization and only offers color as a way to modify it.

An example of a background color focus style on a button, link and text input on both light and dark backgrounds side by side.

Customizations:

Background color - sets the background color of an element

Instead of removing the outline, replace it with something else. Examples: 

** Using color (background/text changes):**
Applying a contrasting background color to the element's focused state 

- 
- **Change the background color:** Select the focused state of the element and apply a contrasting background color to it. The higher the contrast the better because subtle changes may not be strong enough visual cues, particularly in cases where with color blindness and low-vision
- **Change the text color:** If the element has any text, you can select the focused state and change its color. This also works for icons applied with mask-image; you can select the icon as a descendant of the focused element and change its background color. You may also consider using an underline on text links and making it part of the changed

instead of setting \`outline:\` to \`none\`, set it to \`transparent\` instead. WHCM overrides the transparent outline color making it visible _only_ when high contrast mode is turned on <br/>  
    `,
      },
    },
  },
};
const Template = (args) => <Button {...args}>{args.label}</Button>;
export const BaseStyles = (args) => (
  <>
    <div style={{ display: "flex" }}>
      <Button {...args} variant="">
        {args.label}
      </Button>
      <Button {...args} variant="outline">
        {args.label}
      </Button>
      <Button {...args} variant="text">
        {args.label}
      </Button>
    </div>
  </>
);
BaseStyles.args = { label: "Button" };
export const Outline = Template.bind({});
BaseStyles.parameters = {
  docs: {
    storyDescription: "primary button style for application",
  },
};
export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "",
};
Primary.parameters = {
  docs: {
    storyDescription: "primary button style for application",
  },
};
Outline.args = {
  label: "Outline Button",
  variant: "outline",
};

Outline.parameters = {
  docs: {
    storyDescription: "primary button style for application",
  },

  description: "Overwritten description",
  table: {
    type: {
      summary: "Something short",
      detail: "Something really really long",
    },
  },
};
export const Text = Template.bind({});
Text.args = {
  label: "Text Button",
  variant: "text",
};
Text.parameters = {
  docs: { storyDescription: "primary button style for application" },
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  variant: "Disabled",
};
Disabled.parameters = {
  docs: {
    storyDescription: `
<div>Advice on \`disabled\` attribute</div>
***Whenever possible, don’t use disabled buttons***
- **Less cognitive friction**: Allow people to submit the form at any time. This removes the uncertainty of whether the button is even disabled in the first place.
- **Color contrast**: Although a disabled button doesn’t need to meet the WCAG 1.4.3 color contrast, I believe we should guarantee that an element is always properly visible regardless of its state. But that’s something we don’t have to worry about now because the button isn’t disabled anymore
**\`disabled\`** might skip the button when using the Tab key, leading to confusion.
**\`aria-disabled='true'\`**  will still focus the button and announce that it exists, but that it isn’t enabled yet; the same way you might perceive it visually.

| Feature/Attribute   | \`disabled\`   | \`aria-disabled='true'\`          | 
| ------ | ------ | -------------------- | 
| Prevent click | yes  | no |
| Prevent hover | no  | no |
| Prevent focus | yes  | no |
| Default CSS styles | yes  | no |
| Semantics | yes  | yes | 
| Mouse or tap | Prevents a button click  | Requires JS to prevent the click |
| Tab	 | Unable to focus the button  | Able to focus the button |
| Screen reader	 | Button is difficult to locate  | Button is easily located |


<div>Tips on Disabled Buttons</div>

1. **Only show actions that are relevant and useful to the user at a given time** <br/> Examples: 
- Page links that can’t be accessed by users with limited access.
- Actions that are available based on the user’s privacy preferences.
- Filters that are not applicable to the selected items
2. **Provide context**
Is it evident why the user is blocked from performing an action? Will they figure out what is required to continue?

**Text and disabled button**
👍 Consider pairing a disabled action with additional information. Examples:
- A selection is needed to proceed.
- A line item is needed to calculate the cost and show payment options.
- A setting should be enabled to use the feature.
**Tooltip**
👍 Consider using a tooltip to describe why the action is unavailable.Examples:
- An action is not available due to a limitation.
- An input is required to access other options.


3. **Enable by default, then show error as needed**
How likely will users input an incorrect value or submit an incomplete form? Is this the only way we can validate the form?

👍 Sometimes validation can only occur after form submit. This is okay as long as the error is expected to happen very rarely. Make sure to indicate what fields are required and what fields are optional so users have a greater chance of accomplishing the form on their first try. Example:
- Forms with minimal input fields like login and forgot password page.



credits: Justine Win [Disabled Buttons Dont Have To Suck](https://stories.justinewin.com/
also credits: - [Making Disabled Buttons More Inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/)

disabled-buttons-dont-have-to-suck-10da0bb6d37e)`,
  },
};
