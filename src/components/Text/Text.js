import "./Text.css";

export const Text = ({ children }) => <div>{children}</div>;
Text.Heading = ({ variant, children }) =>
  variant === "card" ? (
    <div className="heading-text">{children}</div>
  ) : (
    <h2 className="heading-text">{children}</h2>
  );
Text.Title = ({ children }) => <div className="heading-text">{children}</div>;

Text.Body = ({ children }) => <p className="body-text">{children}</p>;
