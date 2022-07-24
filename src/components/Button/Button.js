// aria-pressed='true'/'false' needed
// can use type='button' instead of event.preventDefault()
// never change pressed state and label together; if a label changes, a change in state is already communicated

import "./Button.css";
const variants = {
  text: "button text-button",
  primary: "button primary-button",
  outline: "button outline-button",
};

/**
- `input` that allows for use-triggered actions when clicked or pressed (related: link)
- standardizing the appearance of buttons in your application enhances the user's recognition of the widgets as buttons 
- Buttons support the optional attribute aria-pressed
- Buttons with a non-empty aria-pressed attribute are toggle buttons. When aria-pressed is true the button is in a "pressed" state, when aria-pressed is false it is not pressed. 
- If the attribute is not present, the button is a simple command button
* https://www.w3.org/TR/wai-aria-1.1/#button | Inherited States & Properties}
* When to use Links vs Buttons | https://marcysutton.com/links-vs-buttons-in-modern-web-applications
**/
export const Button = (props) => {
  const variant = props.variant ? variants[props.variant] : "primary-button";
  console.log("button " + variant);
  return (
    <button {...props} className={"button " + variant}>
      {props.children}
    </button>
  );
};
