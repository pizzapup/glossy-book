import { Button } from "./Button";
import "./Button.css";

export const IconButton = (props) => {
  const direction =
    props.layout === "end" ? "layout-row-reverse" : "layout-row";
  const otherr = props.label
    ? "icon-button-text"
    : "icon-button-text icon-only";
  console.log(otherr);
  return (
    <Button className={"icon-button"}>
      <div className={"icon-button-content-wrap " + direction}>
        <div className="icon-button-icon-wrap">
          <img className="icon-button-icon" src={props.icon} alt="" />
        </div>
        <div className={otherr}>
          <span>{props.label}</span>
        </div>
      </div>
    </Button>
  );
};
