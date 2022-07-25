import "./elevation.css";

export const Elevation = () => {
  const dpList = [
    { name: "00dp", value: 0, className: "dp00" },
    { name: "01dp", value: 5, className: "dp01" },
    { name: "02dp", value: 7, className: "dp02" },
    { name: "03dp", value: 8, className: "dp03" },
    { name: "04dp", value: 9, className: "dp04" },
    { name: "06dp", value: 11, className: "dp06" },
    { name: "08dp", value: 12, className: "dp08" },
    { name: "12dp", value: 14, className: "dp12" },
    { name: "16dp", value: 15, className: "dp16" },
    { name: "24dp", value: 16, className: "dp24" },
  ];
  const rowList = (
    <>
      {dpList.map((item, index) => (
        <li className={item.className}>
          {item.name}: {item.value}%
        </li>
      ))}
    </>
  );

  return (
    <>
      <div className="elevation-body">
        <ul className="outer bright-theme">{rowList}</ul>
        <ul className="outer">{rowList}</ul>
      </div>
    </>
  );
};
