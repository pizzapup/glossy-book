export const CardGroup = ({ children }) => {
  return (
    <div className="card-group">
      <ul className="card-group-list">{children}</ul>
    </div>
  );
};
