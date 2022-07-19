import "./Text.css";

export const Text = ({ children }) => <div>{children}</div>;
Text.Heading = ({ children }) => <h2 className="heading-text">{children}</h2>;
Text.Title = ({ children }) => <h3 className="heading-text">{children}</h3>;
Text.Body = ({ children }) => <p className="body-text">{children}</p>;
