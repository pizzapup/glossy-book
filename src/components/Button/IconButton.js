import { Button } from "./Button";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const IconButton = (props) => {
  const layout = props.layout;
  const direction = props.layout === "end" ? "row-reverse" : "row";
  const ICON = props.icon ? (
    <div className="inner-icon">
      <img src={props.icon} alt="" />
    </div>
  ) : (
    ""
  );
  const TEXT = props.label ? (
    <div className="inner-text">{props.label}</div>
  ) : (
    ""
  );
  return (
    <Button
      btnType="icon"
      css={css`
        ${layout === "icon only"
          ? {
              padding: "0px",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          : ""};
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: ${direction};
          justify-content: center;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          ${layout === "icon only"
            ? {
                padding: "0px",
                aspectRatio: "1/1",
              }
            : ""};
          height: min-content;
          .inner-icon {
            flex-basis: 0.5px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .inner-icon img {
            max-height: 2em;
            fill: white;
            line-height: 0;
            margin: 0;
            padding: 0;
          }
          .inner-text {
            flex-basis: 2px;
          }
        `}
      >
        {ICON}
        {TEXT}
      </div>
    </Button>
  );
};
