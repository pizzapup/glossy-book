import { Text } from "./Text";
import "./Text.css";
import "../../index.css";
import { Button } from "../Button/Button";
export function TextBlock({
  headingText,
  bodyText,
  buttonText,
  variant,
  variantType,
  children,
  alignment,
  compwidth,
}) {
  const ClassNames =
    "text-block " +
    variant +
    " text-block-" +
    variant +
    " text-block-" +
    alignment;

  return (
    <>
      <div className={ClassNames}>
        <Text.Heading variant={variant}>{headingText}</Text.Heading>
        <Text.Body>{bodyText}</Text.Body>
        {variantType === "section" && (
          <Button variant="primary">{buttonText}</Button>
        )}
      </div>
    </>
  );
}
