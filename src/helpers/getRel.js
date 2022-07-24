export const getRel = (props) => {
  if (props.target === "_blank") {
    return (props.rel || "") + " noopener noreferrer";
  }

  return props.rel;
};
// credits: https://kittygiraudel.com/2020/01/17/accessible-links-and-buttons-with-react/
