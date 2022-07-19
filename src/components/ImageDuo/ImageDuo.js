import "./ImageDuo.css";

export const ImageDuo = (props) => {
  return (
    <div className="image-duo">
      <div className="image-duo-inner">
        {/* <div className="two"> */}
        <div className="image-duo-image-wrap">
          <img className="image-duo-image" src={props.images[0]} alt="" />
        </div>
        <div className="image-duo-image-wrap">
          <img className="image-duo-image" src={props.images[1]} alt="" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
