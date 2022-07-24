const getRel = (props) => {
  if (props.target === "_blank") {
    return (props.rel || "") + " noopener noreferrer";
  }

  return props.rel;
};
const NewTabIcon = "new tab";
// !!!! Define icon for "New ab"
// !!!! Link is used with react-router; the string can be converted once the react-router-dom library is imported
export const Action = (props) => {
  const Component = props.to ? "Link" : props.href ? "a" : "button";
  const rel = getRel(props);
  const type = Component === "button" ? props.type || "button" : undefined;
  const className = [
    props.className,
    props.theme === "LINK" ? "link" : "button",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component {...props} rel={rel} type={type} className={className}>
      {props.children}
      {props.target === "_blank" && <NewTabIcon />}
    </Component>
  );
};
// credits: https://kittygiraudel.com/2020/01/17/accessible-links-and-buttons-with-react/
