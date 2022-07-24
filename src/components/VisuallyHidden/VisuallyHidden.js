import "./VisuallyHidden.css";
export const VisuallyHidden = ({ as: Component, ...props }) => (
  <Component {...props} className="sr-only" />
);

VisuallyHidden.defaultProps = {
  as: "span",
};
// as prop provides a way to change the underlying DOM element that is rendered; default is span
// spread props {...props} before className prop (avoid overriding) so other DOM attributes can be passed to the underlying element (e.g.tabIndex)
// credits to: Kitty Giraudel. Checkout their post "An accessible visibility React component" as well as their other content at https://kittygiraudel.com/2020/01/16/accessible-visibility-react-component/
