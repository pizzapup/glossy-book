import "./FunButtons.css";

const variants = {
  bestia: "bestia",
  pan: "one",
  hyperion: "two",
  mimas: "one",
  pandora: "one",
  janus: "one",
  anthe: "one",
  pallene: "",
  telesto: "one",
  calypso: "one",
  skoll: "one",
  greip: "one",
  dione: "one",
  helene: "two",
  atlas: "marquee",
  kari: "marquee",
  //   rhea: "one",
  //   narvi: "two",
  //   hati: "one",
};
export const FunButtons = (props) => {
  //   console.log("button--" + props.variant);
  const getVariant = variants[props.variant];
  const btnText = `${props.label}`;
  return (
    <div className="content__item">
      <button
        className={`funbutton button--${props.variant}`}
        onClick={props.onClick}
      >
        {getVariant === "bestia" ? (
          <div className="button__bg">
            <span>{btnText}</span>
          </div>
        ) : getVariant === "two" ? (
          <span>
            <span>{btnText}</span>
          </span>
        ) : getVariant === "one" ? (
          <span>{btnText}</span>
        ) : getVariant === "marquee" ? (
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
        ) : (
          `${btnText}`
        )}
      </button>
    </div>
  );
};
