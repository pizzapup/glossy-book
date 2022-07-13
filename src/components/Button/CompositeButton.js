import { Button } from "./Button";
export const CompositeButton = (props) => {
  return (
    <Button
      css={{
        display: "flex",
        flex: "1 100%",
        alignItems: "center",
        "& svg": {
          fill: "white",
        },
      }}
    >
      <div className="btn-icon">{props.icon}</div>
      <div className="btn-text">{props.children}</div>
    </Button>
  );
};
