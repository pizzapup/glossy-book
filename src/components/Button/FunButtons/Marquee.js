import "./FunButtons.css";

export const MarqueeButton = (props) => {
  return (
    <div className="content__item">
      <button className={"button button--" + props.variant}>
        <span>{props.label}</span>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__inner">
            <span>{props.label}</span>
            <span>{props.label}</span>
            <span>{props.label}</span>
            <span>{props.label}</span>
          </div>
        </div>
      </button>
    </div>
  );
};
