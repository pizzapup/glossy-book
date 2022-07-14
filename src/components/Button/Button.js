/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../theme/theme";

export const StyledButton = styled.button`
  padding: 14px 24px;
  transition: all 0.15s linear 0s;
  background-color: ${theme.colors.button_bg};
  color: ${theme.colors.on_button};
  fill: ${theme.colors.on_button};
  font-weight: ${theme.font.weight.lg};
  font-size: inherit;
  border-radius: ${theme.radii.sm};
  border: none;
  cursor: pointer;
  display: inline-block;
  min-height: 45px;
`;
const Primary = css`
  :hover {
    background-color: ${theme.colors.button_bg_hover};
  }
`;
const Outline = css`
  background: ${theme.colors.outline_button_bg};
  color: ${theme.colors.on_outline_button};
  fill: ${theme.colors.on_outline_button};
  border: solid thin ${theme.colors.outline_button_border};
  :hover {
    background-color: ${theme.colors.outline_button_bg_hover};
    border: solid thin ${theme.colors.outline_button_border_hover};
  }
`;
const Text = css`
  background: transparent;
  color: inherit;
  fill: inherit;
  font-weight: ${theme.font.weight.md};
  :hover {
    text-decoration: underline;
  }
`;
const variants = { text: Text, primary: Primary, outline: Outline };
export const Button = (props) => {
  const variant = props.variant ? variants[props.variant] : Primary;
  return (
    <StyledButton css={variant} {...props}>
      {props.children}
    </StyledButton>
  );
};
