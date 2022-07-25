import "./List.css";

export const List = ({ listType, className, children }) => {
  return (
    <div className={"list-wrapper list-wrapper-" + listType + " " + className}>
      <ul className={"list list-" + listType + " " + className}>{children}</ul>
    </div>
  );
};
