import "./ImageDuo.css";

export const ImageDuo = (props) => {
  return (
    <div className="image-duo">
      <div
        className="image-duo-image image-duo-test"
        style={{ "--background-image": `url(${props.images[0]})` }}
      >
        {/* <img src={props.images[0]} alt="" /> */}
      </div>
      <div
        className="image-duo-image image-duo-test"
        style={{ "--background-image": `url(${props.images[0]})` }}
      >
        {/* <img src={props.images[1]} alt="" /> */}
      </div>
    </div>
  );
};
