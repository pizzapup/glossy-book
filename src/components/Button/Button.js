import { styled } from "../../stiches.config";
import PropTypes from "prop-types";
import "../../theme/theme.css";
export const Button = styled("button", {
  padding: "14px 24px",
  transition: "all 0.15s linear 0s",
  background: "$btn_bg",
  color: "$btn_text",
  fill: "$btn_text",
  fontWeight: "$4",
  fontSize: "$3",
  borderRadius: "$1",
  border: "none",
  "&:hover": { background: "$btn_bg_hover" },
  "& [primary=true]": { backgroundColor: "pink", textTransform: "uppercase" },
  variants: {
    size: {
      small: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      large: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    outlined: {
      true: {
        backgroundColor: "$outline_btn_bg",
        color: "$outline_btn_text",
        fill: "$outline_btn_text",
        border: "thin solid $outline_btn_border",
        "&:hover": {
          backgroundColor: "$outline_btn_bg",
          borderColor: "$outline_btn_border_hover",
        },
      },
    },
    text: {
      true: {
        backgroundColor: "transparent",
        color: "inherit",
        fill: "inherit",
        border: "none",
        "&:hover": {
          backgroundColor: "$transparent_bg_hover",
          borderColor: "none",
        },
      },
    },
  },
});
Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  background: "$btn_bg",
  primary: false,
  size: "med",
  onClick: undefined,
};
export const Btn = (props) => <button primary>{props.children}</button>;
