// aria-pressed='true'/'false' needed
// can use type='button' instead of event.preventDefault()
// never change pressed state and label together; if a label changes, a change in state is already communicated
import "./Button.css";
const variants = {
  text: "button text-button",
  primary: "button primary-button",
  outline: "button outline-button",
};
export const Button = (props) => {
  const variant = props.variant ? variants[props.variant] : "primary-button";
  return (
    <button {...props} className={"button " + variant}>
      {props.children}
    </button>
  );
};
const Btn = ({ children }) => <>{children}</>;
