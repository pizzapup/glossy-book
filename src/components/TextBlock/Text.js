/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";
import { theme } from "../../theme/theme";
//
// STYLES
const headingReset = css({ fontWeight: theme.font.weight.lg });
const bodyReset = css({ fontWeight: theme.font.weight.md });

const Heading = ({ children }) => <h2 css={headingReset}>{children}</h2>;
const Title = ({ children }) => <div css={headingReset}>{children}</div>;
const Body = ({ children }) => <p css={bodyReset}>{children}</p>;

export const Text = ({ children }) => <>{children}</>;
export const Card = ({ children }) => <>{children}</>;
Text.Heading = Heading;
Text.Body = Body;
Text.Title = Body;
Card.Heading = Heading;
Card.Body = Body;
Card.Title = Body;
