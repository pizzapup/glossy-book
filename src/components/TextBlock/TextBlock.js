/** @jsxImportSource @emotion/react  */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "../Button/Button";
import { theme } from "../../theme/theme";
import { Text } from "./Text";
//

const cardCss = {
  wrapper: css({ fontSize: theme.font.size.sm }),
  headingCss: css({}),
  bodyCss: css({
    fontSize: theme.font.size.sm,
  }),
};
const primaryCss = {
  wrapper: css({}),
  headingCss: css({
    fontSize: theme.font.size.lg,
  }),
  bodyCss: css({
    fontSize: theme.font.size.md,
  }),
};
const secondaryCss = {
  wrapper: css({}),
  headingCss: css({
    fontSize: theme.font.size.xl,
  }),
  bodyCss: css({
    fontSize: theme.font.size.md,
  }),
};
const variants = {
  card: cardCss,
  primary: primaryCss,
  secondary: secondaryCss,
};

//
export function TextBlock({
  headingText,
  bodyText,
  buttonText,
  variant,
  children,
}) {
  const VV = variant ? variants[variant] : "Primary";
  console.log(variant);
  return (
    <>
      <div css={VV.wrapper}>
        <Text.Heading css={VV.headingCss}>{headingText}</Text.Heading>
        <Text.Body css={VV.bodyCss}>{bodyText}</Text.Body>
        <Button>{buttonText}</Button>
      </div>
    </>
  );
}

// const variants = { text: Text, primary: Primary, outline: Outline };
// export const Button = (props) => {
//   const variant = props.variant ? variants[props.variant] : Primary;
//   return (
//     <StyledButton css={variant} {...props}>
//       {props.children}
//     </StyledButton>
//   );
// };
